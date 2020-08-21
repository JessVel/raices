import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../css/About.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <section id="about" className="section1 text-center" xs={12} md={4}>
        <Container className="text center">
          <h1 className="title">#Nosotros</h1>

          <p className="description">
            <em className="raices">Raíces Merlenses</em> es un grupo de personas
            dispuestas a brindar lo mejor de sí para poder ayudar al otro desde
            todos los aspectos posibles. Tiene sus orígenes en la E.E.M. Nº 16,
            allá por el 2012, cuando se presentó como una lista para el centro
            de estudiantes que inculcara los valores de solidaridad.
          </p>
          <Link to={"/nosotros"}>
            <button className="boton-about">Saber más...</button>
          </Link>
        </Container>
      </section>
    </>
  );
};

export default About;
