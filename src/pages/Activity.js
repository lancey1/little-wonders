import { useState } from "react";
import activity from "../images/webp/activitypage.webp";
import styles from "./Activity.module.css";
import { useMediaQuery } from "react-responsive";
{/*
export default function Activity() {
  const [showactivity, setactivity] = useState(true);
  const [showSamplePlan, setSamplePlan] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 1070px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1069px)" });

  const activityClickHandler = () => {
    setactivity(true);
    setSamplePlan(false);
  };
  const sampleClickHandler = () => {
    setactivity(false);
    setSamplePlan(true);
  };
  return (
    <div className={`${styles.activityDiv}`}>
      <img src={activity} alt="" className={`${styles.activityImg}`}></img>
      <h3 className={`${styles.activityHeader}`}>Playful and Engaging Activities</h3>
      <div className={`${styles.activity}`}>
        <div className={`${styles.activitySelection}`}>
          <div onClick={activityClickHandler}>
            How We Choose
            {isDesktop && <i class="fa-solid fa-arrow-right"></i>}
            {isTablet && <i class="fa-solid fa-arrow-down"></i>   }       </div>
          <div onClick={sampleClickHandler}>
            Sample Activities 
            {isDesktop && <i class="fa-solid fa-arrow-right"></i>}
            {isTablet && <i class="fa-solid fa-arrow-down"></i>   }       </div>
        </div>
        <div className={`${styles.activitytext}`}>
          {showactivity && (<div>
            <h3>Our Activities</h3>
            <p>
              Activities provided will encourage the development of essential skills that will help your child get ready for kindergarten such as letter, number, color and shape recognition activities.
              Activities will be developmentally appropriate, engaging and most importantly fun.
              {"\n"}
              {"\n"}
              We provide playful opportunities to learn from single alphabet letters progressing to reading words, writing their own name, perception of the colors, shapes, recognizing numbers, exploring nature, and creative arts.
              {"\n"}
              {"\n"}
              We offer variety of activities that develop child’s fine motor skills by using glue, paint, play dough and learning how to cut, trace and draw.
              {"\n"}
              {"\n"}
              We encourage preschoolers to take part in programs which are based on their growing interests.              
              {"\n"}
              By encouraging them to cooperatively play, we foster their budding social skills, creative imagination and adaptability.
            </p>
            </div>
          )}
          {showSamplePlan && (
            <div className={`${styles.samplePlan}`}>
              <div>
                <div className={`${styles.sampleHeader}`}>Cognitive Skills</div>
                <div className={`${styles.sampleBody}`}>
                  <div>Reading Activities - Story Time</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>Writing Activities - Name Writing</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>Letter Recognition</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>Color Recognition</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>Number Recognition</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>Shape Recognition</div>
                </div>
              </div>
              <div>
                <div className={`${styles.sampleHeader}`}>Social Skills</div>
                <div className={`${styles.sampleBody}`}>
                  <div>Group Games</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>Discussions</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>Free Play</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>Talk about Feelings {'&'} Emotions</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>Manners</div>
                </div>
              </div>
              <div>
                <div className={`${styles.sampleHeader}`}>Motor Skills</div>
                <div className={`${styles.sampleBody}`}>
                  <div>Excursions to local park </div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>Physical Activity - Children Games</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>Baking</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>Nature Exploration</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>Gardening and Planting</div>
                </div>
              </div>
              <div>
                <div className={`${styles.sampleHeader}`}>Creativity Skills </div>
                <div className={`${styles.sampleBody}`}>
                  <div>Role Playing</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>Tie-Dye Fun</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>Painting</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>Play Doh and Slime Making</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>Arts {'&'} Crafts</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
*/}
