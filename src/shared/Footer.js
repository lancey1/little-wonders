import styles from "./Footer.module.css";

export default function footer() {
  return (
    <div className={`${styles.footer}`}>
      <div className={`${styles.about}`}>
        <h3>About Us</h3>
        <p>
          Little Wonders is a home daycare located in Bradford ON. Operated by Ms. Rohit, an
          experienced Registered Early Childhood Educator with more than
          8 years of experience. Open for ages 30 months and above.
        </p>
      </div>
      <div className={`${styles.contact}`}>
        <h3>Contact Us</h3>
        <p>84 Porter St. Bradford, ON (Barrie St. and Holland St West)</p>
        <p>Phone: 647-524-4429</p>
        <p>Email: rohitajaysharma84@gmail.com</p>
        <p>Hours: Monday to Friday  7:30 AM to 5:30 PM</p>
      </div>
      <div className={`${styles.links}`}>
        <h3>Links</h3>
        <p>About</p>
        <p></p>
        <p>Contact</p>
      </div>
      <p>Little Wonders © 2022. </p>
    </div>
  );
}
