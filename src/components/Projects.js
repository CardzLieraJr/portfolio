import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
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
      description: "https://cohsep.nha.gov.ph/",
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
      description: "https://autoaccess.com.ph/",
      imgUrl: projImg4,

    },
    {
      title: "KRYSTAL CLEAR WATER SYSTEM, INC",
      description: "https://kcws.com.ph/",
      imgUrl: projImg5,

    },
    {
      title: "UNI-FAB METAL INDUSTRIES, INC",
      description: "https://unifab.ph/",
      imgUrl: projImg6,

    },
  ];

  const others = [
    {
      title: "Inventory Management API",
      description:"RESTful API with JWT authentication, role-based access (Admin/User), CRUD operations, and request validation.",
      tech: ["Laravel", "MySQL", "JWT"],
      imgUrl: projImg7,
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
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Systems</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Websites</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Others</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>


                      <Tab.Pane eventKey="second">
                        <Row>
                          {website.map((website, index) => {
                            return <ProjectCard key={index} {...website} />;
                          })}
                        </Row>{" "}
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <Row>
                          {others.map((others, index) => {
                            return <ProjectCard key={index} {...others} />;
                          })}
                        </Row>{" "}
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
