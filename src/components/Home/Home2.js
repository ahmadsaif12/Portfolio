import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

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
              I'm a <b className="purple">Backend Developer</b> with a passion
              for building scalable REST APIs and robust systems.
              <br />
              <br />
              I specialize in{" "}
              <i>
                <b className="purple">Python, Django, and Node.js</b>
              </i>
              , and I also work with{" "}
              <b className="purple">DevOps</b> tools like{" "}
              <i>
                <b className="purple">
                  Docker, Kubernetes, AWS, and CI/CD pipelines
                </b>
              </i>.
              <br />
              <br />
              Currently working at{" "}
              <b className="purple">Arcodify Agency</b> — deepening my skills
              in Redis caching and cloud deployment.
              <br />
              <br />
              I enjoy building backend systems with{" "}
              <b className="purple">Node.js</b> and modern frameworks like{" "}
              <i>
                <b className="purple">Express</b> and{" "}
                <b className="purple">Django REST Framework</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
