import activity from '../images/activitypage.jpg'
import styles from './Activity.module.css'


export default function Activity() {
  return (
    <div className={`${styles.activityDiv}`}>
      <img
        src={activity}
        alt=""
        className={`${styles.activityImg}`}
      ></img>
      <div className={`${styles.activities}`}>

      </div>
    </div>
  );
}