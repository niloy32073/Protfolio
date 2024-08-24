import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaLinkedinIn ,FaTelegram} from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }} data-aos="fade-right">
              <span className="primary-header"> ABOUT </span> ME
            </h1>
            <p className="home-about-body" data-aos="fade-up">
              <br />
              I'm a <i className="primary-header">
                Self-Taught Mobile App Developer
              </i>{" "}
              who loves solving challenges and creating innovative apps for Android and iOS.
              <br />
              <br />I have a deep passion for{" "}
              <i className="primary-header">technology</i> and continuously strive to learn new tools and frameworks.
              <br />
              <br />I specialize in developing cross-platform apps using {" "}
              <i>
                <i className="primary-header">Kotlin Multiplatform (KMP)</i>.
              </i>
              <br />
              <br />I build robust backends with{" "}
              <i className="primary-header">Ktor, Node.js, or Django</i> utilizing databases like
              <i className="primary-header"> MySQL or PostgreSQL.</i>
              <br />
              <br />
              Currently expanding my portfolio by building more{" "}
              <i className="primary-header">projects </i>projects that I can add
              here.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                data-aos="fade-left"
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 data-aos="fade-right">
              <span className="primary-header">CONNECT </span> WITH ME
            </h1>
            <p data-aos="fade-left">Feel free to connect with me</p>
            <ul className="home-about-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  href="https://github.com/niloy32073"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:mdnrahmanx27@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nrahman64/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/qr/GOPPUVP6YNAJF1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="whatsapp"
                >
                  <AiOutlineWhatsApp/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.t.me/niloy32073"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="telegram"
                >
                  <FaTelegram/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
