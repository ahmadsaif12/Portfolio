import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span
              style={{
                display: "block",
                fontSize: "1.1em",
                fontWeight: 600,
                marginBottom: "12px",
              }}
            >
              Let Me Introduce Myself
            </span>
            I'm a <span className="purple">Backend Developer</span> with a
            passion for building scalable REST APIs and robust systems. I enjoy
            solving complex problems and turning ideas into reliable software
            that scales.
            <br />
            <br />
            I specialize in <span className="purple">Python</span>,{" "}
            <span className="purple">Django</span>, and{" "}
            <span className="purple">Node.js</span>. I also work with{" "}
            <span className="purple">DevOps</span> tools like Docker,
            Kubernetes, AWS, and CI/CD pipelines — because great code deserves
            great infrastructure.
            <br />
            <br />
            I enjoy building backend systems with modern frameworks like{" "}
            <span className="purple">Express</span> and{" "}
            <span className="purple">Django REST Framework</span>. From API
            design to database optimization — I care about every layer.
            <br />
            <br />
            Currently working at{" "}
            <span className="purple">Arcodify Agency</span> — deepening my
            skills in <span className="purple">Redis caching</span> and{" "}
            <span className="purple">cloud deployment</span>, always pushing
            for faster and more reliable systems.
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
            "The best backend systems are the ones you never notice — they just
            work."
          </p>
          <footer className="blockquote-footer">Saif</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
