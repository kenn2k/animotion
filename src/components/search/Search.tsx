import { useContext, useState } from "react";
import axios from "axios";
import Button from "./SearchButton";
import styles from "./search.module.css";
import { TypeContext } from "../Context/Context";

import { useNavigate } from "react-router-dom";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setAnimeData } = useContext(TypeContext);
  const navigate = useNavigate();
  const searchAnime = () => {
    axios
      .get(`https://kitsu.io/api/edge/anime?filter[text]=${searchTerm}`)
      .then((response) => {
        if (response.data.data.length > 0) {
          setAnimeData(response.data.data[0]);
          navigate("/search");
        } else {
          setAnimeData(null);
        }
      })
      .catch((error) => {
        console.error("Error", error);
      })
      .finally(() => {
        setSearchTerm("");
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <button
          className={styles.button}
          onClick={() => {
            navigate(-1);
          }}
        >
          <KeyboardDoubleArrowLeftIcon />
        </button>
        <label htmlFor="search"></label>
        <input
          className={styles.textField}
          type="text"
          placeholder="Find Anime"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          id="search"
        />
        <Button onClick={searchAnime}>Search</Button>
      </div>
    </div>
  );
};
export default Search;
