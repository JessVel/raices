import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { Link } from 'react-router-dom';
import { Nav, Navbar }from "react-bootstrap";
import logo from "../images/logo.png";
import "../index.css";

const NavBar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Navbar className="sticky-top navbar" expand="lg">
      <Link to={"/"} className="navbar-brand">
          <img
            style={{ height: "70px" }}
            src={logo}
            alt="logo"
            onClick={scrollToTop}
          ></img>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link
              to="/"
              className="nav-link"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              Home
            </Link>
            <Link
              to="donar"
              className="nav-link"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              Donar
            </Link>
            <Link
              to="nosotros"
              className="nav-link"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              Nosotros
            </Link>

            <Link
              to="comedores"
              className="nav-link"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              Nuestros comedores
            </Link>
            <a
              href="https://docs.google.com/forms/d/1RpsRwaoy1V9PRCBjRleNEZ0vlMAEowSRi5MkSzgbUVg/edit"
              className="nav-link"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              Sumate como voluntario
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
