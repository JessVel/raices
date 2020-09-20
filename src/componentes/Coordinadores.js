import React from "react";
import Container from "react-bootstrap/Container";
import coordinadores from "../images/coordinadores.jpg";
import "../index.css";

const Coordinadores = () => {
  return (
    <>
      <Container fluid className="text-center my-5 px-0">
        <h1 className="title">#Coordinadores</h1>

        <img
          fluid
          src={coordinadores}
          className="img-vol-coor w-100"
          alt="raices bichito de luz"
        />

        <p>fulanito menganito, chirombito y chirombita</p>
      </Container>
    </>
  );
};
export default Coordinadores;
