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
            I enjoy building backend systems with Node.js and modern frameworks
            like <span className="purple">Express</span> and{" "}
            <span className="purple">Django REST Framework</span>. From
            designing clean API architectures to optimizing database queries and
            implementing caching strategies — I enjoy every part of the backend
            development lifecycle.
            <br />
            <br />
            Currently working at{" "}
            <span className="purple">Arcodify Agency</span> — deepening my
            skills in <span className="purple">Redis caching</span> and{" "}
            <span className="purple">cloud deployment</span>. I'm constantly
            exploring new tools and techniques to improve performance,
            reliability, and developer experience across the stack.
            <br />
            <br />
            When I'm not coding, you'll find me exploring new places, playing
            games, or diving into something new that sparks my curiosity:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies
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
