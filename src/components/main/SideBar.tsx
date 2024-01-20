import { useContext } from "react";
import { TypeContext } from "../Context/Context";
import styles from "./sideBar.module.css";

const SideBar = () => {
  const { animeData } = useContext(TypeContext);

  const data = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const startDate = animeData?.attributes.createdAt;
  const endDate = animeData?.attributes.updatedAt;
  const receivedStartDate = startDate ? data.format(new Date(startDate)) : "";
  const receivedEndDate = endDate ? data.format(new Date(endDate)) : "";

  return (
    <div className={styles.sideBar__sidebar}>
      <div className={styles.sideBar__page}>
        <div className={styles.sideBar__content}>
          <h2>Anime Details</h2>
          <div className={styles.sideBar__details}>
            <div className={styles.sideBar__lang}>English</div>
            <div className={styles.sideBar__ApiLang}>
              {animeData?.attributes.titles.en_jp}
            </div>
          </div>
          <div className={styles.sideBar__details}>
            <div className={styles.sideBar__lang}>Japanese</div>
            <div className={styles.sideBar__ApiLang}>
              {animeData?.attributes.titles.ja_jp}
            </div>
          </div>
          <div className={styles.sideBar__details}>
            <div className={styles.sideBar__lang}>Synonyms</div>
            <div className={styles.sideBar__ApiLang}>
              {animeData?.attributes.abbreviatedTitles}
            </div>
          </div>
          <div className={styles.sideBar__details}>
            <div className={styles.sideBar__lang}>Type</div>
            <div className={styles.sideBar__ApiLang}>{animeData?.type}</div>
          </div>
          <div className={styles.sideBar__details}>
            <div className={styles.sideBar__lang}>Episodes</div>
            <div className={styles.sideBar__ApiLang}>
              {animeData?.attributes.episodeCount}
            </div>
          </div>
          <div className={styles.sideBar__details}>
            <div className={styles.sideBar__lang}>Status</div>
            <div className={styles.sideBar__ApiLang}>
              {animeData?.attributes.status}
            </div>
          </div>
          <div className={styles.sideBar__details}>
            <div className={styles.sideBar__lang}>Aired</div>
            <div className={styles.sideBar__ApiLang}>
              {receivedStartDate} to {receivedEndDate}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
