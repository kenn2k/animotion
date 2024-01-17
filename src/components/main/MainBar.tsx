import { useContext } from "react";
import { TypeContext } from "../Context/Context";
import styles from "./mainBar.module.css";

const MainBar = () => {
  const { animeData } = useContext(TypeContext);
  const image = animeData?.attributes.posterImage.original;
  const synopsis = animeData?.attributes.synopsis;
  const cannon = animeData?.attributes.canonicalTitle;
  return (
    <div className={styles.mainBar}>
      <div className={styles.picture}>
        <img src={image} alt="no image" />
        <h3 className={styles.title}>{cannon}</h3>
      </div>
      <div className={styles.info}>
        <p>{synopsis}</p>
      </div>
    </div>
  );
};

export default MainBar;
