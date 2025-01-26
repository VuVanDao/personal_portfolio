import { Col, Container, Row } from "react-bootstrap";
import MailChimpForm from "./MailChimpForm";
import robotLogo from "../assets/images/logoRobot.gif";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailChimpForm />
          <Col sm={6}>
            <img src={robotLogo} className="logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#!">
                <FaLinkedin className="social-icon-link" />
              </a>
              <a href="#!">
                <FaGithub className="social-icon-link" />
              </a>
              <a href="#!">
                <FaFacebook className="social-icon-link" />
              </a>
            </div>
            <p>Copied by VanDaoHehe</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
