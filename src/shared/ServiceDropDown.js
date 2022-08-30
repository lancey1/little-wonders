import React from "react";
import styles from "./ServiceDropDown.module.css";
import { useNavigate } from "react-router-dom";

export default function ServiceDropDown(props) {
  let navigate = useNavigate();
  return (
    <div className={`${styles.backdrop}`}>
      {props.p}
      <button
        onClick={() => navigate(`${props.url}`)}
        className={`${styles.btn}`}>
        Learn More
      </button>
    </div>
  );
}