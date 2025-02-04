import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/logoRobot.gif";
import "./NavigationBar.css";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const NavigationBar = () => {
  let [activeLink, setActiveLink] = useState("home");
  let [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  const onUpdateActiveLink = (link) => {
    setActiveLink(link);
  };
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" className="logo " />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
              href="#home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
              href="#skills"
            >
              Skills
            </Nav.Link>
            <Nav.Link
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
              href="#projects"
            >
              Project
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/%C4%91%E1%BA%A1o-v%C5%A9-v%C4%83n-47b98b34a/">
                <FaLinkedin className="social-icon-link" />
              </a>
              <a href="https://github.com/VuVanDao">
                <FaGithub className="social-icon-link" />
              </a>
              <a href="https://www.facebook.com/vu.van.ao.208585">
                <FaFacebook className="social-icon-link" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
              <span>Connect with me</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
