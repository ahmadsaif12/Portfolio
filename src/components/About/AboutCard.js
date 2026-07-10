import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey, I'm <span className="purple">Saif Ahmad</span> — a{" "}
            <span className="purple">Backend Developer</span> from{" "}
            <span className="purple">Nepal</span> who enjoys turning complex
            problems into clean, scalable solutions.
            <br />
            <br />
            I primarily work with{" "}
            <span className="purple">Python</span>,{" "}
            <span className="purple">Django</span>, and{" "}
            <span className="purple">Node.js</span>, building REST APIs and
            services that are built to last. I also have hands-on experience
            with <span className="purple">Docker</span>,{" "}
            <span className="purple">Kubernetes</span>,{" "}
            <span className="purple">AWS</span>, and CI/CD pipelines.
            <br />
            <br />
            Currently working at{" "}
            <span className="purple">Arcodify Agency</span>, where I focus on
            backend architecture, <span className="purple">Redis caching</span>,
            and <span className="purple">cloud deployment</span> — always
            looking for ways to make systems faster and more reliable.
            <br />
            <br />
            I believe the best backend systems are the ones you never notice —
            they just work.
          </p>

          <ul style={{ marginTop: "15px" }}>
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
              marginTop: "15px",
              fontStyle: "italic",
            }}
          >
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Saif</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
