import { useState } from "react";
import play from "../images/playpage.jpg";
import styles from "./Play.module.css";
import { useMediaQuery } from "react-responsive";

export default function Play() {
  const [showplay, setplay] = useState(true);
  const [showSamplePlan, setSamplePlan] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 1070px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1069px)" });

  const playClickHandler = () => {
    setplay(true);
    setSamplePlan(false);
  };
  const sampleClickHandler = () => {
    setplay(false);
    setSamplePlan(true);
  };
  return (
    <div className={`${styles.playDiv}`}>
      <img src={play} alt="" className={`${styles.playImg}`}></img>
      <h3 className={`${styles.playHeader}`}>Our Teaching Services</h3>
      <div className={`${styles.play}`}>
        <div className={`${styles.playSelection}`}>
          <div onClick={playClickHandler}>
            Play {'&'} Learn 
            {isDesktop && <i class="fa-solid fa-arrow-right"></i>}
            {isTablet && <i class="fa-solid fa-arrow-down"></i>   }       </div>
          <div onClick={sampleClickHandler}>
            Sample Day Plan 
            {isDesktop && <i class="fa-solid fa-arrow-right"></i>}
            {isTablet && <i class="fa-solid fa-arrow-down"></i>   }       </div>
        </div>
        <div className={`${styles.playtext}`}>
          {showplay && (<div>
            <h3>Our Teaching Philosophy</h3>
            <p>
              Little Wonders believes that children require a loving, nurturing, and secure environment in order to thrive.
              {"\n"}
              Our staff are first-aid CPR certified, fully vaccinated including Covid-19, and have vulnerable sector clearance.
              {"\n"}
              {"\n"}
              Unlike other daycares, we follow play-based learning, an emergent curriculum that leads to  “Ready for Kindergarten” approach using worksheets, sensory visual learning, introduction to alphabets, practice writing names, numbers and shapes.
              {"\n"}
              {"\n"} Day structured around various learning activities enhancing all developmental skills. Programming based on children’s interests
              {"\n"}
              {"\n"}
              We believe that parents want their child to be comfortable, confident and challenged so that they may develop a love for learning and accomplishment.
            </p>
            </div>
          )}
          {showSamplePlan && (
            <div className={`${styles.samplePlan}`}>
              <div>
                <div className={`${styles.sampleHeader}`}>Day 1</div>
                <div className={`${styles.sampleBody}`}>
                  <div>07:30 AM - Drop Off</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>08:30 AM - Breakfast</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>09:00 AM - Circle Time - Calendar</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>10:00 AM - Outdoor Activity</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>11:00 AM - Learning activities - Sorting {'&'} Matching</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>12:00 PM - Lunch</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>13:00 PM - Nap/Quiet Time </div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>15:00 PM - Afternoon Snack</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>15:30 PM - Circle Time</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>16:00 PM - Outdoor Activity</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>17:30 PM - Pick Up Time</div>
                </div>
              </div>
              <div>
                <div className={`${styles.sampleHeader}`}>Day 2</div>
                <div className={`${styles.sampleBody}`}>
                  <div>07:30 AM - Drop Off</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>08:30 AM - Breakfast</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>09:00 AM - Circle Time - Weather</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>10:00 AM - Outdoor Activity</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>11:00 AM - Learning activities - Arts {'&'} Craft</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>12:00 PM - Lunch</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>13:00 PM - Nap/Quiet Time </div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>15:00 PM - Afternoon Snack</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>15:30 PM - Story Time</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>16:00 PM - Outdoor Activity</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>17:30 PM - Pick Up Time</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
