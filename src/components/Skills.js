import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import jsLogo from "../assets/images/jsLogo.jpg";
import reactJsLogo from "../assets/images/reactJsLogo.jpg";
import nodeJsLogo from "../assets/images/nodeJsLogo.jpg";
import teamWorkLogo from "../assets/images/teamWorkLogo.gif";
import colorSharp from "../assets/images/color-sharp.png";
import "./Skills.css";
const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>hahaha</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                keyBoardControl={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={teamWorkLogo} alt="" />
                  <h5>Team Work</h5>
                </div>
                <div className="item">
                  <img src={jsLogo} alt="" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={reactJsLogo} alt="" />
                  <h5>ReactJS</h5>
                </div>
                <div className="item">
                  <img src={nodeJsLogo} alt="" />
                  <h5>NodeJS/Express</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
export default Skills;
