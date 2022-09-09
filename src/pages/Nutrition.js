import eating from "../images/nutritionpage.jpg";
import styles from "./Nutrition.module.css";

export default function Nutrition() {
  return (
    <div className={`${styles.nutritionDiv}`}>
      <img src={eating} alt="" className={`${styles.nutritionImg}`}></img>
      <div className={`${styles.nutrition}`}>WIP</div>
    </div>
  );
}
