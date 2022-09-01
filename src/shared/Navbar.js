import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import {LinkContainer} from 'react-router-bootstrap'
import styles from "./Navbar.module.css";
import logo from "../images/logo2.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";

function BasicExample() {
  let navigate = useNavigate();
  const isDesktop = useMediaQuery({ query: "(min-width: 992px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 991px)" });
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(true);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  return (
    <Navbar expand="lg">
      {isDesktop && (
        <Container>
            <img
              onClick={() => navigate("/")}
              className={`${styles.logo}`}
              src={logo}
              alt="little wonders' in Bradford Ontario logo"
            />
            <Nav className={`me-auto ${styles.linksContainer}`}>
            <LinkContainer to="/">
              <Nav.Link className={`${styles.links}`}>Home</Nav.Link>
              </LinkContainer>
              {/* Dropdown Begins */}
              <NavDropdown
                className={`${styles.links} ${styles.dropdown}`}
                show={show}
                onClick={() => navigate("/services")}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
                title="Services"
                id="basic-nav-dropdown">

                <NavDropdown.Item href="/services/play">
                  Play {"&"} Learn
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item href="/services/activities">
                  Activities
                </NavDropdown.Item>
                <NavDropdown.Divider />
                
                <NavDropdown.Item href="/services/nutrition">
                  Nutrition
                </NavDropdown.Item>
              </NavDropdown>
              {/* Dropdown Ends */}
              <LinkContainer to="/about">
              <Nav.Link className={`${styles.links}`}>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
              <Nav.Link className={`${styles.links}`} >Contact Us</Nav.Link>
              </LinkContainer>
            </Nav>
        </Container>
      )}
      {isTablet && (
        <Container>
          <Navbar.Brand href="/">
            <img
              onClick={() => navigate("/")}
              className={`${styles.logo}`}
              src={logo}
              alt="little wonders' in Bradford Ontario logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle className={`${styles.toggle}`} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className={`${styles.dropdown}`}
>
            <Nav className="me-auto">
              <Nav.Link className={`${styles.links}`} href="/">Home</Nav.Link>
              <NavDropdown.Divider className={`${styles.links}`} />
              <Nav.Link className={`${styles.links}`} href="/services">Services</Nav.Link>
              <NavDropdown.Divider className={`${styles.links}`}/>
              <Nav.Link className={`${styles.links}`} href="/about">About</Nav.Link>
              <NavDropdown.Divider className={`${styles.links}`} />
              <Nav.Link className={`${styles.links}`} href="/contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      )}
    </Navbar>
  );
}
export default BasicExample;
