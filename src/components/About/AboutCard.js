import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left", lineHeight: "1.7" }}>
            <span className="purple">Backend Developer</span> based in{" "}
            <span className="purple">Nepal</span>, specializing in designing and
            developing high-performance REST APIs and distributed systems.
            <br />
            Proficient in <span className="purple">Python</span>,{" "}
            <span className="purple">Django</span>, and{" "}
            <span className="purple">Node.js</span>, with hands-on experience in{" "}
            <span className="purple">Docker</span>,{" "}
            <span className="purple">Kubernetes</span>,{" "}
            <span className="purple">AWS</span>, and CI/CD workflows.
            <br />
            Currently contributing at{" "}
            <span className="purple">Arcodify Agency</span> — driving
            improvements in{" "}
            <span className="purple">Redis caching strategies</span> and{" "}
            <span className="purple">cloud-native deployments</span>.
          </p>

          <ul style={{ marginTop: "10px", marginBottom: "10px" }}>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
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
