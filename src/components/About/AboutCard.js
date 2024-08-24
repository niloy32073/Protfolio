import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify"}}>
            Hi Everyone, I am <span className="primary-header">Nifaur Rahman</span> from Rajshahi, Bangladesh. I am a computer science graduate and a passionate programmer.
            <br />
            <br />
          </p>
          <p className="text-left">
            Educational Background:
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> BSc in CSE, <br/>Rajshahi University of Engineering and Technology (2020-2024)
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight />HSc in Science,<br/> Rangpur Govt. College(2017-2019)
            </li>
          </ul>
          <br />
          <p className="text-left">
            Job History:
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> Mobile App Developer(2023-Present), <br/>Divine Companion Inc.<br/>Stockholm, Sweden
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Mobile App Developer(2022-2023), <br/>Muskan Digitals<br/>Dhaka, Bangladesh
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
