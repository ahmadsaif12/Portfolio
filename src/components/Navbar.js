import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { VscHome, VscPerson, VscFolder, VscFile } from "react-icons/vsc";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function scrollHandler() {
      updateNavbar(window.scrollY >= 20);
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  useEffect(() => {
    updateExpanded(false);
  }, [location]);

  function isActive(path) {
    return location.pathname === path;
  }

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" />
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                className={isActive("/") ? "nav-link-active" : ""}
                onClick={() => updateExpanded(false)}
              >
                <VscHome />
                <span>Home</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                className={isActive("/about") ? "nav-link-active" : ""}
                onClick={() => updateExpanded(false)}
              >
                <VscPerson />
                <span>About</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                className={isActive("/project") ? "nav-link-active" : ""}
                onClick={() => updateExpanded(false)}
              >
                <VscFolder />
                <span>Projects</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                className={isActive("/resume") ? "nav-link-active" : ""}
                onClick={() => updateExpanded(false)}
              >
                <VscFile />
                <span>Resume</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://github.com/ahmadsaif12"
                target="_blank"
                className="nav-github"
              >
                <FiGithub />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
