import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jonatan Diaz </span>
            from <span className="purple"> Buenos Aires, Argentina.</span>
            <br />
            I am currently employed as a software developer at Technisys.
            <br />
            I have completed Computer System Technical Degree at UTN.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Videogames
            </li>
            <li className="about-activity">
              <ImPointRight /> Read
            </li>
            <li className="about-activity">
              <ImPointRight /> Swim
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
