import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Saif Ahmad</span> from{" "}
            <span className="purple">Nepal</span> — a{" "}
            <span className="purple">Backend Developer</span> who loves building
            scalable REST APIs and robust systems.
            <br />
            <br />
            I work with <span className="purple">Python</span>,{" "}
            <span className="purple">Django</span>,{" "}
            <span className="purple">Node.js</span>, and{" "}
            <span className="purple">DevOps</span> tools like Docker,
            Kubernetes, and AWS.
            <br />
            <br />
            Currently at{" "}
            <span className="purple">Arcodify Agency</span> — building backend
            systems and exploring{" "}
            <span className="purple">Redis caching</span> &amp;{" "}
            <span className="purple">cloud deployment</span>.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling &amp; Exploring
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "10px" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Saif</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
