import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import voluntario from "../images/voluntariado.png";
import donar from "../images/maps.png";
import "../css/ComoParticipar.css";

const ComoParticipar = () => {
  return (
    <>
      <Container id="comoparticipar" className="section3 text-center">
        <h1 className="titulo1">#ComoParticipar</h1>
        <Row className="d-flex justify-content-center text-center">
          <Col sm={12}
           xl={6}
           
            className="d-flex justify-content-center text-center"
          >
            <Card className="cards">
              <Card.Img variant="top" className="card-top" src={donar} />
              <Card.Body>
                <Card.Title>Nuestros merenderos</Card.Title>
                <Card.Text>
                  Aca te dejamos un listado con la direccion de nuestros
                  merenderos y sus responsables para que sepas donde
                  encontrarnos.
                </Card.Text>
                <Link to="comedores">
                  <button className="btn-tarjeta">Saber más...</button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col
           sm={12}
           xl={6}
            className="d-flex justify-content-center text-center"
          >
            <Card className="cards">
              <Card.Img variant="top" className="card-top" src={voluntario} />
              <Card.Body>
                <Card.Title>Quiero ser voluntario</Card.Title>
                <Card.Text>
                  Queres formar parte y ayudarnos a mejorar la vida de los
                  merlenses? Contactanos llenando este formulario.
                </Card.Text>
                <button className="btn-tarjeta">
                  <a href="https://docs.google.com/forms/d/1RpsRwaoy1V9PRCBjRleNEZ0vlMAEowSRi5MkSzgbUVg/edit">
                    Formulario
                  </a>
                </button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ComoParticipar;
