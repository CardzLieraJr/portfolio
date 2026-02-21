import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



export const Projects = () => {
  const projects = [
    {
      title: "Data ID System",
      description: "https://balikprobinsya-id.nha.gov.ph",
      imgUrl: projImg1,
    },
    {
      title: "Profiling Management System",
      description: "https://cohsep.nha.gov.ph",
      imgUrl: projImg2,
    },
    {
      title: "Beneficiary Profiling System",
      description: "https://bps2.nha.gov.ph/",
      imgUrl: projImg3,
    },
  ];

  const website = [
    {
      title: "AutoAccess",
      description: "https://balikprobinsya-id.nha.gov.ph",
      imgUrl: projImg1,
      icon: faEnvelope

    },
    {
      title: "Profiling Management System",
      description: "https://cohsep.nha.gov.ph",
      imgUrl: projImg2,
    },
    {
      title: "Beneficiary Profiling System",
      description: "https://bps2.nha.gov.ph/",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Porfolio</h2>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Systems</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Websites</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Designs</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      {/* website */}
                      <Tab.Pane eventKey="second">
                        <Row>
                          {website.map((website, index) => {
                            return <ProjectCard key={index} {...website} />;
                          })}
                        </Row>{" "}
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
