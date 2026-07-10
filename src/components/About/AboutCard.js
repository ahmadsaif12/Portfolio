import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left", lineHeight: "1.7" }}>
            I'm a <span className="purple">Backend Developer</span> from{" "}
            <span className="purple">Nepal</span> who enjoys building scalable
            REST APIs and robust systems.
            <br />
            I work with <span className="purple">Python</span>,{" "}
            <span className="purple">Django</span>,{" "}
            <span className="purple">Node.js</span>, and{" "}
            <span className="purple">DevOps</span> tools like Docker,
            Kubernetes &amp; AWS.
            <br />
            Currently at{" "}
            <span className="purple">Arcodify Agency</span> — focused on{" "}
            <span className="purple">Redis caching</span> &amp;{" "}
            <span className="purple">cloud deployment</span>.
          </p>

          <ul style={{ marginTop: "10px", marginBottom: "10px" }}>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling &amp; Exploring
            </li>
          </ul>

          <p
            style={{
              color: "rgb(155, 126, 172)",
              fontStyle: "italic",
              marginBottom: "5px",
            }}
          >
            "The best backend systems are the ones you never notice."
          </p>
          <footer className="blockquote-footer">Saif</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
