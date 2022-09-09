import play from "../images/playpage.jpg";
import styles from "./Play.module.css";

export default function Play() {
  return (
    <div className={`${styles.playDiv}`}>
      <img src={play} alt="" className={`${styles.playImg}`}></img>
      <div className={`${styles.plays}`}>WIP</div>
    </div>
  );
}
