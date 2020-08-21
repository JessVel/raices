import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Row";
import donar from "../images/bank.svg";
import "../css/Donar.css";
import wave from "../images/wave.svg";
const Donar = () => {
  return (
    <>
      <section id="donar" className="section2"></section>
      <div className="donar">
        <Container>
          <h1 className="donar">#Donar</h1>
          <Row>
            <Col>
              <img className="icon" src={donar} fluid></img>
            </Col>

            <Col>
              <p className="donar1">
                Ayudanos a ayudar, hace tu aporte con el monto que elijas desde
                Mercado Pago. Los habitantes de Merlo estarán muy agradecidos.
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
