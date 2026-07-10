import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Saif Ahmad</span>{" "}
            from <span className="purple">Nepal</span>.
            <br />
            <br />
            I'm a <span className="purple">Backend Developer</span> with a
            passion for building scalable REST APIs and robust systems. I love
            solving complex problems and crafting solutions that handle real-world
            traffic and scale.
            <br />
            <br />
            I specialize in <span className="purple">Python</span>,{" "}
            <span className="purple">Django</span>, and{" "}
            <span className="purple">Node.js</span>. I also work with{" "}
            <span className="purple">DevOps</span> tools like Docker,
            Kubernetes, AWS, and CI/CD pipelines — because shipping reliable
            code is just as important as writing it.
            <br />
            <br />
            Currently working at{" "}
            <span className="purple">Arcodify Agency</span> — deepening my
            skills in Redis caching, cloud deployment, and building backend
            systems with modern frameworks like Express and Django REST Framework.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Saif</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
