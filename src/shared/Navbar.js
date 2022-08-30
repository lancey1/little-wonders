import { NavLink, useNavigate } from "react-router-dom";
import styles from './Navbar.module.css'
import logo from '../images/logo.png'

function Navbar() {
  let navigate = useNavigate();
  
  return (
  <div className={`${styles.navbar}`}>
    <div className={`${styles.container}`}>
      <div>
        <img onClick= {()=>navigate('/')} className= {`${styles.logo}`} src={logo} alt="little wonders' logo"/>
      </div>
      <ul className={`${styles.links}`}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="services">Services</NavLink></li>
        <li><NavLink to="about">About</NavLink></li>
        <li><NavLink to="contact">Contact Us</NavLink></li>
      </ul>
    </div>
  </div>
  );
}
export default Navbar;