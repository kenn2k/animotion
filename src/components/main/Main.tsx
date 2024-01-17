import { useContext } from "react";
import { TypeContext } from "../Context/Context";
import styles from "./main.module.css";
import MainBar from "./MainBar";
import SideBar from "./SideBar";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const navigate = useNavigate();
  const { animeData } = useContext(TypeContext);
  if (!animeData) {
    return null;
  }
  return (
    <div className={styles.content}>
      <div className={styles.arrow}>
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
      </div>
      <MainBar />
      <SideBar />
    </div>
  );
};

export default Main;
