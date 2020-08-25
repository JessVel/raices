import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Row";
import donar from "../images/bank.svg";
import "../css/Donar.css";

const Donar = () => {
  return (
    <>
      <section id="donar" className="section2"></section>
      <div className="donar">
        <Container>
          <h1 className="titulo">#Donar</h1>
          <Row xs={1} md={2}>
            <Col>
              <img src={donar} className="icon" fluid></img>
            </Col>

            <Col>
              <p className="help">Ayudanos a ayudar!</p>
              <p className="donar2">
                Hacé tu donación con el monto que elijas desde Mercado Pago. Los
                habitantes de Merlo estarán muy agradecidos.
              </p>

              <button className="btn-btn">Donar</button>
            </Col>
          </Row>
        </Container>{" "}
      </div>
    </>
  );
};
export default Donar;
//className="d-flex align-items-stretch justify-content-center text-center
