import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";


export default function Footer() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1070px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1069px)" });

  return (
    <div className={`${styles.footer}`}>
      <div className={`${styles.about}`}>
        <h3>About Us</h3>
        <p>
          Little Wonders is a licensed daycare located in Bradford ON. Operated by an
          experienced Registered Early Childhood Educator with more than 8 years
          of experience.
        </p>
        <p>Currently accepting children of all ages.</p>
        <p>Daycare fees starting as low as $23 per day.</p>
      </div>
      
      <div className={`${styles.contact}`}>
        <h3>Contact Us</h3>
        <p>Porter St. Bradford, ON (Barrie St. and Holland St West)</p>
        {/* <p>Phone: 647-524-4429</p> */}
        <p>
          {isDesktop && (
            <a href="mailto:rohitajaysharma84@gmail.com">
              Email: rohitajaysharma84@gmail.com
            </a>
          )}
          {isTablet && (
            <a href="mailto:rohitajaysharma84@gmail.com">
              rohitajaysharma84@gmail.com
            </a>
          )}
        </p>
        <p>Hours: Monday to Friday 8:30 AM to 5:30 PM</p>
      </div>
      <div className={`${styles.links}`}>
        <h3>Quick Links</h3>
        <p>
          <NavLink to="services">Our Services</NavLink>
        </p>
        <p>
          <NavLink to="about">About Us</NavLink>
        </p>
        <p>
          <NavLink to="contact">Contact Us</NavLink>
        </p>
        <p>
          <a
            href="https://www.facebook.com/LittleWondersbradford/"
            target={"_blank"}
            rel="noreferrer"
          >
            Facebook
          </a>
        </p>
        <p>
          <a
            href="https://www.instagram.com/kidsluvlearning/"
            target={"_blank"}
            rel="noreferrer"
          >
            Instagram
          </a>
        </p>
      </div>
    </div>
  );
}
