import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import BookingCare from "../assets/images/BookingCare.gif";
import ProjectsCard from "./ProjectsCard";
import colorSharp2 from "../assets/images/color-sharp2.png";
import "./Projects.css";
const Projects = () => {
  const projects = [
    { title: "bookingCare", description: "Nice", imgURL: BookingCare },
    { title: "bookingCare", description: "Nice", imgURL: BookingCare },
    { title: "bookingCare", description: "Nice", imgURL: BookingCare },
    { title: "bookingCare", description: "Nice", imgURL: BookingCare },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>hahaha</p>
            <Tab.Container defaultActiveKey="first" id="projects-tabs">
              <Nav variant="pills" className="flex-row mb-3">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects &&
                      projects.length > 0 &&
                      projects.map((item, index) => {
                        return (
                          <ProjectsCard
                            {...item}
                            key={`projects-card-${index}`}
                          />
                        );
                      })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                <Tab.Pane eventKey="third">Third tab content</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
export default Projects;
