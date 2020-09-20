import React from "react";
import Container from "react-bootstrap/Container";
import voluntarios from "../images/voluntarios.jpg";
import "../index.css";

const Voluntarios = () => {
  return (
    <>
      <Container fluid className="text-center my-5 px-0">
        <h1 className="title">#Voluntarios</h1>

        <img
          fluid
          src={voluntarios}
          className="img-vol-coor w-100"
          alt="voluntarios raices"
        />

        <p>fulanito menganito, chirombito y chirombita</p>

        <button className="btn-btn">
        <a
         
          href="https://docs.google.com/forms/d/1RpsRwaoy1V9PRCBjRleNEZ0vlMAEowSRi5MkSzgbUVg/edit"
        >
          Quiero ser voluntario!
        </a>
        </button>
      </Container>
    </>
  );
};
export default Voluntarios;
