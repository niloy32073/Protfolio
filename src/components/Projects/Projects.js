import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import TextSender from "../../Assets/Projects/TextSender.png";
import TripWiz from "../../Assets/Projects/TripWiz.png";
import TerraWhale from "../../Assets/Projects/TerraWhale.jpg";
import MyMoney from "../../Assets/Projects/MyMoney.png";
import bocr from "../../Assets/Projects/bocr.png";
import Attendance from "../../Assets/Projects/Attendance.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={TerraWhale}
              title="TerraWhale"
              description="TerraWhale is a cross-platform investment app designed to connect venture capitalists with emerging businesses. VCs can explore detailed profiles of new startups and easily schedule meetings to discuss potential investments. The app is backed by a robust custom backend built with Node.js and MySQL, ensuring a seamless and secure user experience across platforms."
              ghLink="https://github.com/niloy32073/Terra-Whale-App"
              demoLink="https://terrawhales.com/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={MyMoney}
              title="My Money"
              description="My Money is an AI-powered expense tracker app designed to streamline personal finance management. It automatically reads and analyzes incoming SMS messages to generate detailed financial reports. The app stores data locally for easy access and is built natively for Android using Kotlin and Jetpack Compose, ensuring a smooth and responsive user experience."
              ghLink="https://github.com/niloy32073/My-Money"
              demoLink="https://github.com/niloy32073/My-Money"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={TripWiz}
              title="TripWiz"
              description="TripWiz is a travel website with a dedicated native Android WebView app that enhances the user experience by incorporating additional features beyond the standard WebView. The app seamlessly integrates with the website, providing users with an optimized and enriched interface for exploring travel options and booking experiences directly from their mobile devices."
              ghLink="https://github.com/niloy32073/TripWiz"
              demoLink="https://tripwiz.ca/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={TextSender}
              title="Text Sender"
              description="Text Sender is a native Android app leveraging OCR technology to extract data from images and send it to a remote server for processing. This app streamlines data capture and transmission, providing a fast and efficient solution for converting physical text into digital form. Built for accuracy and ease of use, it seamlessly integrates advanced OCR capabilities into a mobile platform."
              ghLink="https://github.com/niloy32073/Text-Sender"
              demoLink="https://github.com/niloy32073/Text-Sender"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={bocr}
              title="Bangla License Plate Ditector"
              description="Bangla License Plate Detector is a native Android app designed to recognize and extract Bangla text from vehicle license plates. The app captures an image of the vehicle, processes it using a Python script to isolate the license plate region, and then applies OCR to accurately extract the Bangla text from the plate. This seamless integration of image processing and OCR technology provides a robust solution for license plate recognition in the Bangla language."
              ghLink="https://github.com/niloy32073/bocr"
              demoLink="https://github.com/niloy32073/bocr"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Attendance}
              title="Attendance Management"
              description="Attendance Management is a native Android app tailored for schools to efficiently manage student attendance. With a user-friendly interface designed to accommodate older teachers, the app offers a local database for secure data storage and a statistics section for analyzing student performance and attendance trends, making it an essential tool for educational institutions."
              ghLink="https://github.com/niloy32073/AttendanceMangement"
              demoLink="https://github.com/niloy32073/AttendanceMangement"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
