import styles from "./Home.module.css";
import { useMediaQuery } from "react-responsive";
import landingpage from "../images/landingpage.jpg";
import videobg from "../Videos/Education720p.mp4";
import videoMobile from "../Videos/Education.mp4";

export default function Home() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1070px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1069px)" });
  return (
    <div className={`${styles.mainHomeDiv}`}>
      <div className={`${styles.homeDiv}`}>
        <div className={`${styles.overlay}`}></div>
        {isDesktop && <video className={`${styles.video}`} src={videobg} autoPlay loop muted  />}
        {isTablet && <video className={`${styles.video}`} src={videoMobile} autoPlay loop muted />}
        <h1 className={`${styles.homeHeader}`}>
          Welcome to Little Wonders.
          {"\n"}
          {"\n"}
          Your Child's Learning Journey Begins Here.
        </h1>
      </div>
      <div className={`${styles.homeContainer}`}>
        <div className={`${styles.map}`}>
          {isDesktop && (
            <iframe
              title={"Daycare Location"}
              src={
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2864.2311478578104!2d-79.56545786076936!3d44.119854210998675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ac5887c148255%3A0xf9bbd1a51ab07306!2s84%20Porter%20St%2C%20Bradford%2C%20ON%20L3Z%201E8!5e0!3m2!1sen!2sca!4v1661800694935!5m2!1sen!2sca"
              }
              width="550"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          )}
          {isTablet && (
            <iframe
              title={"Daycare Location"}
              src={
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2864.2311478578104!2d-79.56545786076936!3d44.119854210998675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ac5887c148255%3A0xf9bbd1a51ab07306!2s84%20Porter%20St%2C%20Bradford%2C%20ON%20L3Z%201E8!5e0!3m2!1sen!2sca!4v1661800694935!5m2!1sen!2sca"
              }
              width="525"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
}
