import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./animeList.module.css";
import { LocalAnime } from "../../types/types";
import Category from "./Category";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useNavigate } from "react-router-dom";
export interface Anime extends LocalAnime {}

const AnimeList = () => {
  const [animeList, setAnimeData] = useState<Anime[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [nav, setNavbar] = useState(false);
  const navigate = useNavigate();
  const navHandler = () => {
    setNavbar(!nav);
  };
  useEffect(() => {
    const fetchData = async () => {
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

        const response = await axios.get(url);
        const animeList = response.data.data;
        setAnimeData(animeList);
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
      <div className={styles.container}>
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
          <div className={styles.form}>
            <span>
              <button
                className={styles.button}
                onClick={() => {
                  navigate(-1);
                }}
              >
                <KeyboardDoubleArrowLeftIcon />
              </button>
              <button className={styles.button}>
                <KeyboardDoubleArrowRightIcon />
              </button>
            </span>
            <div className={styles.mobile}>
              <input
                type="text"
                placeholder="Search anime by category"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
              {genres.map((genre) => (
                <button key={genre} onClick={() => handleGenreClick(genre)}>
                  {genre}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>
      <div className={styles.category}>
        <ul>
          <Category animeList={animeList} />
        </ul>
      </div>
    </>
  );
};

export default AnimeList;
