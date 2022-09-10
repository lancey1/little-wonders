import { useState } from "react";
import eating from "../images/nutritionpage.jpg";
import styles from "./Nutrition.module.css";

export default function Nutrition() {
  const [showNutrition, setNutrition] = useState(true);
  const [showSamplePlan, setSamplePlan] = useState(false);

  const nutritionClickHandler = () => {
    setNutrition(true);
    setSamplePlan(false);
  };
  const sampleClickHandler = () => {
    setNutrition(false);
    setSamplePlan(true);
  };
  return (
    <div className={`${styles.nutritionDiv}`}>
      <img src={eating} alt="" className={`${styles.nutritionImg}`}></img>
      <h3 className={`${styles.nutritionHeader}`}>Our Food Services</h3>
      <div className={`${styles.nutrition}`}>
        <div className={`${styles.nutritionSelection}`}>
          <div onClick={nutritionClickHandler}>
            Nutrition <i class="fa-solid fa-arrow-right"></i>
          </div>
          <div onClick={sampleClickHandler}>
            Sample Plan <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className={`${styles.nutritiontext}`}>
          {showNutrition && (
            <p>
              Providing our kids with healthy and delicious meals is very
              important to us! Our balanced meals provide energy and nutrition
              for their growing bodies.
              {"\n"}
              {"\n"}
              Little Wonders proudly serves fresh, home-cooked meals made from
              scratch. Our meal plans follow the Canadian Food Guide and
              includes at least three servings of fresh fruit and vegetables
              each day.
              {"\n"}
              {"\n"} Meals include fresh vegetables and fruit, whole grains,
              lean meats and low sugar recipes, and rotating meal schedules
              ensure that each days menu is different from the last. We also
              accommodate allergy and other dietary restrictions.
            </p>
          )}
          {showSamplePlan && (
            <div className={`${styles.samplePlan}`}>
              <div>
                <div className={`${styles.sampleHeader}`}>Morning Snack</div>
                <div className={`${styles.sampleBody}`}>
                  <div>Toast with Jam</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>Apple Slices</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>Milk</div>
                </div>
              </div>
              <div>
                <div className={`${styles.sampleHeader}`}>Lunch</div>
                <div className={`${styles.sampleBody}`}>
                  <div>Vegetarian Spaghetti</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>Steamed Veggies</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>Milk</div>
                </div>
              </div>
              <div>
                <div className={`${styles.sampleHeader}`}>Afternoon Snack</div>
                <div className={`${styles.sampleBody}`}>
                  <div>Fresh Veggie Sticks</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>Hummus Dip</div>
                  <div className={`${styles.lineBreak}`}></div>
                  <div>Water</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
