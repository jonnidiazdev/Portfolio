import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a <b className="purple">seasoned software developer</b> with over a decade of experience 
              specializing in <b className="purple">backend development. 👨🏽‍💻</b>
              <br />
              <br />
              My journey in the tech world has been largely shaped by my extensive work with 
              financial institutions, particularly in <b className="purple">the banking sector.</b>
              <br />
              <br />
              While backend development is my main focus, 
              I'm also <b className="purple">well-versed in frontend technologies</b>, 
              making me a <b className="purple">versatile developer</b> who can adapt to various challenges.
              <br />
              <br />
              My approach to software development is rooted in{" "} 
              <b className="purple">problem-solving</b> and <b className="purple">attention to detail</b>. 
              I pride myself on being a quick learner <b className="purple">—a jack of all trades—</b> 
              capable of diving into new technologies and methodologies with ease. 
              Whether it's designing seamless integrations or troubleshooting intricate systems, 
              I'm always <b className="purple">up for the challenge.</b>

              <br />
              <br />
              <i>Feel free to explore my portfolio and get in touch if you'd like to collaborate 
              or learn more about my work!</i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/jonnidiazdev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jonnidiazdev/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
