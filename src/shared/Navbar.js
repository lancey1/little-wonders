import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../images/logo.png";

function Navbar() {
  let navigate = useNavigate();

  return (
    <header className={`${styles.navbar}`}>
      <div className={`${styles.container}`}>
        <div>
          <img
            onClick={() => navigate("/")}
            className={`${styles.logo}`}
            src={logo}
            alt="little wonders' in Bradford Ontario logo"
          />
        </div>
        <ul className={`${styles.links}`}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {/* Dropdown Begins */}
          <li>
            <div className={`${styles.dropdown}`}>
              <div className={`${styles.dropbtn}`}>
                <NavLink to="services">
                  Services <i class="fa-solid fa-angle-down"></i>
                </NavLink>
              </div>
              <div className={`${styles.content}`}>
                <p>
                  <NavLink to="services/play">Play and Learn</NavLink>
                </p>
                <p>
                  <NavLink to="services/nutrition">Nutrition</NavLink>
                </p>
              </div>
            </div>
          </li>
          {/* Dropdown Ends */}
          
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact Us</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default Navbar;