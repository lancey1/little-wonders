import styles from "./Services.module.css";
import servicespfp from "../images/services.jpg";
import activityImg from "../images/outdoor.jpg";
import nutritionImg from "../images/food.jpg";
import playImg from '../images/play_display.jpg';

export default function Services() {
  return (
    <div className={`${styles.servicesDiv}`}>
      <h1>Our Services</h1>
      <img alt="" src={servicespfp} className={`${styles.servicesPicture}`} ></img>
      <div className={`${styles.servicesHeader}`}>
        <h3>What Separates Little Wonders from other daycares? {"\n"}</h3>
        <p>
          <i>
            "Unlike other home daycares, we follow Play-based learning, emergent
            curriculum that leads to Ready for Kindergarten approach using
            worksheets, sensory visual learning, introduction to alphabets,
            practice writing names, numbers and shapes."
          </i>
        </p>
      </div>
      <div className={`${styles.servicesContainer}`}>
        <div className={`${styles.play}`}>
          <img src={playImg} alt="" className={`${styles.playImg}`}></img>
          <div><p>Play and Learn</p></div>
          <div><p>Ready for Kindergarten</p></div>
        </div>
        <div className={`${styles.activity}`}>
          <img src={activityImg} alt="" className={`${styles.activityImg}`}></img>
          <div><p>Activities</p></div>
          <div><p>Indoor and Outdoor Learning</p></div>
        </div>
        <div className={`${styles.nutrition}`}>
          <img src={nutritionImg} alt="" className={`${styles.nutritionImg}`} ></img>
          <div><p>Nutrition</p></div>
          <div><p>Healthy Meals and Snacks</p></div>
        </div>
      </div>
    </div>
  );
}