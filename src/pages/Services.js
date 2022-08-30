import React, { useState } from "react";
import styles from "./Services.module.css";
import servicespfp from "../images/services.jpg";
import activityImg from "../images/outdoor.jpg";
import nutritionImg from "../images/food.jpg";
import playImg from "../images/play_display.jpg";
import ServiceDropDown from "../shared/ServiceDropDown";

export default function Services() {
  const [showRight, setShowRight] = useState(false);
  const [showMiddle, setShowMiddle] = useState(false);
  const [showLeft, setShowLeft] = useState(false);

  // const [isShown, setIsShown] = useState(false);
  // const mouseEnter = () => setIsShown(true);

  const mouseLeave = () => {
    setShowRight(false);
    setShowMiddle(false);
    setShowLeft(false);
  };
  const rightHoverHandler = () => {
    setShowRight(true);
    setShowMiddle(false);
    setShowLeft(false);
  };
  const middleHoverHandler = () => {
    setShowRight(false);
    setShowMiddle(true);
    setShowLeft(false);
  };
  const leftHoverHandler = () => {
    setShowRight(false);
    setShowMiddle(false);
    setShowLeft(true);
  };
  const play = (
    <ul className={`${styles.ullist}`}>
      <li>Social</li>
      <li>Emotional</li>
      <li>Communication and literacy</li>
      <li>Cognition</li>
      <li>Physical activity</li>
      <li>Story reading</li>
    </ul>
  );
  const activity = (
    <ul className={`${styles.ullist}`}>
      <li>Crafts</li>
      <li>Baking</li>
      <li>Science experiments </li>
      <li>Play-doh and slime making</li>
      <li>Excursions to local park </li>
      <li>Nature exploration</li>
    </ul>
  );
  const nutrition = (
    <ul className={`${styles.ullist}`}>
      <li>A balanced diet</li>
      <li>Home-cooked meals</li>
      <li>Healthy treats like fruit</li>
    </ul>
  );

  return (
    <div className={`${styles.servicesDiv}`}>
      <h1>Our Services</h1>
      <img
        alt=""
        src={servicespfp}
        className={`${styles.servicesPicture}`}
      ></img>
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
        <div className={`${styles.play}`} onMouseLeave={mouseLeave}>
          <img
            src={playImg}
            alt=""
            className={`${styles.playImg}`}
            onMouseEnter={leftHoverHandler}
          ></img>
          <h3>Play and Learn</h3>
          {showLeft && <ServiceDropDown p={play} url={'play'}></ServiceDropDown>}
        </div>
        <div className={`${styles.activity}`} onMouseLeave={mouseLeave}>
          <img
            src={activityImg}
            alt=""
            className={`${styles.activityImg}`}
            onMouseEnter={middleHoverHandler}
          ></img>
          <h3>Activities</h3>
          {showMiddle && <ServiceDropDown p={activity} url={'activities'}></ServiceDropDown>}
        </div>
        <div className={`${styles.nutrition}`} onMouseLeave={mouseLeave}>
          <img
            src={nutritionImg}
            alt=""
            className={`${styles.nutritionImg}`}
            onMouseEnter={rightHoverHandler}
          ></img>
          <h3>Nutrition</h3>
          {showRight && <ServiceDropDown p={nutrition} url={''}></ServiceDropDown>}
        </div>
      </div>
    </div>
  );
}
