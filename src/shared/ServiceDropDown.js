import React from 'react'
import styles from './ServiceDropDown.module.css';

function ServiceDropDown(props) {
    return (
        <div className={`${styles.backdrop}`}>
          {props.p}
          <button className={`${styles.btn}`}>Learn More</button>
        </div >
    )
}

export default ServiceDropDown