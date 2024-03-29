import { useContext } from "react";
import { TypeContext } from "../Context/Context";
import styles from "./main.module.css";
import MainBar from "./MainBar";
import SideBar from "./SideBar";

const Main = () => {
  const { animeData } = useContext(TypeContext);
  if (!animeData) {
    return null;
  }
  return (
    <div className={styles.main__content}>
      <MainBar />
      <SideBar />
    </div>
  );
};

export default Main;
