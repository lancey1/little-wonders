import styles from "./About.module.css";
import pfp from "../images/rohit.png";
import house from "../images/house.jpg";

export default function About() {
  return (
    <div className={`${styles.aboutDiv}`}>
      <h1 className={`${styles.aboutHeader}`}>About Us</h1>
      <div className={`${styles.divContainer}`}>
        <img className={`${styles.house}`} src={house} alt="Daycare Area" />
        <p className={`${styles.divp1}`}>
          Little Wonders is a home daycare located in Bradford ON. The daycare
          is air conditioned and heated. It is also pet and smoke free. Operated
          by Ms. Rohit, an experienced Registered Early Childhood Educator with
          more than 8 years of experience. Open for ages 30 months and above.
        </p>
        <img className={`${styles.pfp}`} src={pfp} alt="Ms. Rohit" />
        <p className={`${styles.divp2}`}>
          Ms. Rohit is a mother of two daughters aged 12 and 15 years old. She
          is proficient in multiple languages: English, Punjabi and Hindi. She
          also understands a few basic Russian words. She graduated with Honors
          from Humber College in Early Childhood Education, and awarded a
          Master's Degree in Political Science and Punjabi in India. Ms. Rohit
          previously worked in child care centers that are well-renowned in the
          local communities of Bradford, Thornhill, and Vaughan since 2013. She
          is fully vaccinated including Covid-19 vaccines, first-aid CPR
          certified and vulnerable sector clearance. Her love and
          expertise in children fuelled her passion to opening her very own
          daycare center.
        </p>
      </div>
    </div>
  );
}