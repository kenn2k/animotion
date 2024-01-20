import { LocalAnime } from "../../types/types";
import styles from "./category.module.css";

interface ICategory extends Pick<LocalAnime, "attributes" | "id"> {}

const Category: React.FC<{ animeList: ICategory[] }> = ({ animeList }) => {
  return (
    <div className={styles.category__content}>
      {animeList.map((anime) => (
        <li key={anime.id}>
          <div className={styles.category__mainBar}>
            <div className={styles.category__picture}>
              <img src={anime.attributes.posterImage.original} alt="gfhsfgh" />

              <h3 className={styles.category__title}>
                {anime.attributes.canonicalTitle}
              </h3>
            </div>
            <div className={styles.category__info}>
              <p>{anime.attributes.synopsis}</p>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Category;
