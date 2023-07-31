import styles from "./About.module.css";
import pfp from "../images/rohit.png";
import house from "../images/webp//house.webp";

export default function About() {
  return (
    <div className={`${styles.aboutDiv}`}>
      <h1 className={`${styles.aboutHeader}`}>About Us</h1>
      <div className={`${styles.aboutContainer}`}>
        <img className={`${styles.house}`} src={house} alt="Little Wonders Bradford Daycare Area" />
        <div className={`${styles.divp1}`}>
          <h2>About Little Wonders</h2>
          {"\n"}
          Little Wonders is a licensed home daycare located in Bradford Ontario. Major
          intersection of Barrie St. and Holland St West.
          {"\n"}
          {"\n"}
          The daycare is air-conditioned and heated. It is also pet and smoke
          free. There is ample outdoor space for physical activity.
          {"\n"}
          {"\n"}
          Operated by Ms. Rohit, an experienced Registered Early Childhood
          Educator with more than 8 years of experience.
        </div>
        <img className={`${styles.pfp}`} src={pfp} alt="Ms. Rohit, Operator of Little Wonders Daycare in Bradford" />
        <div className={`${styles.divp2}`}>
        <h2>About Ms Rohit</h2>
        {"\n"}
          Ms. Rohit is a wife and mother of two, aged 12 and 15 years old.
          {"\n"}
          {"\n"} She is proficient in multiple languages: English, Punjabi and
          Hindi. She also understands a few basic Russian words. {"\n"}
          {"\n"} She graduated with Honors from Humber College in Early
          Childhood Education, and was awarded a Master's Degree in Political
          Science and Punjabi in India. {"\n"}
          {"\n"} Ms. Rohit previously worked in child care centers that are
          well-renowned in the local communities of Bradford, Thornhill, and
          Vaughan since 2013.
          {"\n"}
          {"\n"}
          She is first-aid CPR certified, fully vaccinated including Covid-19,
          and has vulnerable sector clearance.
          {"\n"}
          {"\n"} Her passion and expertise in children motivated her into
          opening her very own daycare center.
        </div>
      </div>
    </div>
  );
}
