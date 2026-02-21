import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="mt-4">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/ricardo-jr-liera-8940832a3/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              </div>
              <p>Copyright 2026. All Rights Reserved</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
