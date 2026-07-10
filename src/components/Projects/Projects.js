import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bloodbank from "../../Assets/Projects/bloodbank.svg";
import lms from "../../Assets/Projects/lms.svg";
import websiteIntel from "../../Assets/Projects/website-intel.svg";
import greencart from "../../Assets/Projects/greencart.svg";
import studentMgmt from "../../Assets/Projects/student-mgmt.svg";
import portal from "../../Assets/Projects/portal.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
          <p style={{ color: "white", marginBottom: "20px" }}>
            Here are a few projects I've worked on recently.
          </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }} className="g-1">
          <Col xs={12} sm={6} md={4} className="project-card">
            <ProjectCard
              imgPath={bloodbank}
              title="Blood Bank Management System"
              description="A web-based platform to streamline blood donations, hospital requests, and inventory tracking. Built with React.js, Node.js, Express, and MongoDB. Features JWT authentication, real-time inventory monitoring, and donor management."
              ghLink="https://github.com/ahmadsaif12/bloodBank"
            />
          </Col>

          <Col xs={12} sm={6} md={4} className="project-card">
            <ProjectCard
              imgPath={lms}
              title="Edemy LMS"
              description="A full-stack Learning Management System with course management, video streaming, progress tracking, and payment integration. Built with React, Node.js, MongoDB, Cloudinary, and Stripe."
              ghLink="https://github.com/ahmadsaif12/LMS"
              demoLink="https://lms-iota-hazel.vercel.app"
            />
          </Col>

          <Col xs={12} sm={6} md={4} className="project-card">
            <ProjectCard
              imgPath={websiteIntel}
              title="Website Intelligence Tool"
              description="A FastAPI-based website inspection tool that fetches live pages, extracts insights, and lets users upload PDFs to ask Gemini-powered questions. Features Docker support and a modern browser UI."
              ghLink="https://github.com/ahmadsaif12/website-intelligent-tool"
            />
          </Col>

          <Col xs={12} sm={6} md={4} className="project-card">
            <ProjectCard
              imgPath={greencart}
              title="Greencart"
              description="An e-commerce platform with a React frontend and Node.js backend. Features product browsing, cart management, and a seamless shopping experience."
              ghLink="https://github.com/ahmadsaif12/greencart"
              demoLink="https://greencart-zeta-three.vercel.app"
            />
          </Col>

          <Col xs={12} sm={6} md={4} className="project-card">
            <ProjectCard
              imgPath={studentMgmt}
              title="Student Management System"
              description="A full-stack student management platform with features for managing student records, courses, and academic data. Built with React, Node.js, and MongoDB."
              ghLink="https://github.com/ahmadsaif12/student_management_project"
              demoLink="https://student-management-project-seven.vercel.app"
            />
          </Col>

          <Col xs={12} sm={6} md={4} className="project-card">
            <ProjectCard
              imgPath={portal}
              title="Arcodify Portal"
              description="Internal portal for Arcodify Agency — managing projects, clients, and team workflows. Built for the organization's operational needs."
              ghLink="https://github.com/Arcodify/portal"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
