import { useState, useEffect, useContext } from "react";
import axios from "axios";
import styles from "./animeList.module.css";
import { LocalAnime } from "../../types/types";
import Category from "./Category";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { TypeContext } from "../Context/Context";

export interface Anime extends LocalAnime {}

const AnimeList = () => {
  const [animeList, setAnimeList] = useState<Anime[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [nav, setNavbar] = useState(false);
  const { setIsLoading, isLoading } = useContext(TypeContext);
  const navHandler = () => {
    setNavbar(!nav);
  };
  useEffect(() => {
    const fetchData = () => {
      setIsLoading(true);
      try {
        let url = "https://kitsu.io/api/edge/anime";

        if (selectedGenre) {
          url += `?filter[categories]=${selectedGenre}`;
        }

        if (searchQuery) {
          url += selectedGenre
            ? `&filter[text]=${searchQuery}`
            : `?filter[text]=${searchQuery}`;
        }
        axios.get(url).then((response) => {
          setAnimeList(response.data.data);
          setIsLoading(false);
        });
      } catch (error) {
        console.error("Error fetching anime data:", error);
      }
    };

    fetchData();
  }, [selectedGenre, searchQuery]);

  const handleGenreClick = (genre: string) => {
    setSelectedGenre(genre === "All" ? null : genre);
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  const genres = ["All", "Action", "Comedy", "Drama", "Fantasy", "Sci-Fi"];

  return (
    <>
      <div className={styles.list__container}>
        <div onClick={navHandler} className={styles.burgerBtn}>
          {nav ? <CloseIcon /> : <MenuIcon />}
        </div>
        <nav
          className={
            nav
              ? ([styles.navbar, styles.active].join(" ") as string)
              : styles.navbar
          }
        >
          <div className={styles.list__form}>
            {isLoading && <h1>loading...</h1>}
            <div className={styles.list__mobile}>
              <input
                type="text"
                placeholder="Search anime by category"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
              {genres.map((genre, index) => (
                <button key={index} onClick={() => handleGenreClick(genre)}>
                  {genre}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>
      {!isLoading && (
        <div className={styles.list__category}>
          <ul>
            <Category animeList={animeList} />
          </ul>
        </div>
      )}
    </>
  );
};

export default AnimeList;
