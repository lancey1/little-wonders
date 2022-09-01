import styles from "./Home.module.css";
import { useMediaQuery } from "react-responsive";
import videobg from "../Videos/Education720p.mp4";
import videoMobile from "../Videos/Educationlow.mp4";
import play from "../images/play2.jpg"
import food from "../images/food2.jpg"
import activity from "../images/activity2.jpg"
import playMobile from "../images/play-mobile.jpg"
import foodMobile from "../images/food-mobile.jpg"
import activityMobile from "../images/activity-mobile.jpg"
import {useNavigate } from "react-router-dom";


export default function Home() {
  let navigate = useNavigate();
  const isDesktop = useMediaQuery({ query: "(min-width: 1070px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1069px)" });
  return (
    <div className={`${styles.mainHomeDiv}`}>
      <div className={`${styles.homeDiv}`}>
        <div className={`${styles.overlay}`}></div>
        {isDesktop && <video className={`${styles.video}`} src={videobg} autoPlay loop muted  />}
        {isTablet && <video className={`${styles.video}`} src={videoMobile} autoPlay loop muted />}
        <h1 className={`${styles.homeHeader}`}>
          Welcome to Little Wonders!
          {"\n"}
          {"\n"}
          Your Child's Learning Journey Begins Here.
          {"\n"}
          {"\n"}
          Accepting Full-Time Children Aged 30 Months And Up.
        </h1>
      </div>
      <h1 className={`${styles.servicesHeader}`}>Our Services</h1>
      <div className={`${styles.homeShowcase}`}>
        <div className={`${styles.homePlay}`}>
        <div className={`${styles.overlay}`}></div>
        {isDesktop && <img className= {`${styles.homeImgs} ${styles.aboutImg}`} src={play} alt=""></img>}
        {isTablet && <img className= {`${styles.homeImgs} ${styles.aboutImg}`} src={playMobile} alt=""></img>}

        <div className={`${styles.textContainer}`}>
        <p onClick={() => navigate("services/play")} className={`${styles.text}`}>
          Play {'&'} Learn
        </p>
        <p>Click to learn more</p>
        </div>
        </div>

        <div className={`${styles.homeActivity}`}>
        <div className={`${styles.overlay}`}></div>
        {isDesktop && <img className= {`${styles.homeImgs} ${styles.serviceImg}`} src={activity} alt=""></img>}
        {isTablet && <img className= {`${styles.homeImgs} ${styles.aboutImg}`} src={activityMobile} alt=""></img>}
        <div className={`${styles.textContainer}`}>
        <p onClick={() => navigate("services/activities")} className={`${styles.text}`}>
          Activities
        </p>
        <p>Click to learn more</p>

        </div>
        </div>

        <div className={`${styles.homeNutrition}`}>
        <div className={`${styles.overlay}`}></div>
        {isDesktop && <img className= {`${styles.homeImgs} ${styles.contactImg}`} src={food} alt=""></img>}
        {isTablet && <img className= {`${styles.homeImgs} ${styles.aboutImg}`} src={foodMobile} alt=""></img>}
        <div className={`${styles.textContainer}`}>
        <p onClick={() => navigate("services/nutrition")} className={`${styles.text}`}>
        Healthy {'&'} Delicious Meals
        </p>
        <p>Click to learn more</p>
        </div>
        </div>
      </div>

      <h1 className={`${styles.servicesHeader}`}>Our Location</h1>
      <div className={`${styles.homeContactdiv}`} >
      <div className={`${styles.contactContainer}`}>
      <div className={`${styles.location}`}>
       {isDesktop && <h4 className={`${styles.locationHeader}`}>Contact Us</h4>}
        <p>84 Porter St. Bradford, ON (Barrie St. and Holland St West)</p>
        <p>Steps from Marie of the Incarnation Separate School</p>
        <p>Phone: 647-524-4429</p>
        <p>Email: rohitajaysharma84@gmail.com</p>
        <p>Hours: Monday to Friday - 7:30 AM to 5:30 PM</p>
      </div>
      <div className={`${styles.map}`}>
          {isDesktop && (
            <iframe
            title={"Little Wonders Location - 84 Porter St, Bradford, ON L3Z 1E8"}
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
              title={"Little Wonders Location - 84 Porter St, Bradford, ON L3Z 1E8"}
              src={
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2864.2311478578104!2d-79.56545786076936!3d44.119854210998675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ac5887c148255%3A0xf9bbd1a51ab07306!2s84%20Porter%20St%2C%20Bradford%2C%20ON%20L3Z%201E8!5e0!3m2!1sen!2sca!4v1661800694935!5m2!1sen!2sca"
              }
              width="100%"
              height="430"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          )}
      </div>
    </div>
    </div>
    </div>


  );
}
