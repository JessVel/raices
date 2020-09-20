import React from "react";
import { Accordion, Card, Row, Col, Container } from "react-bootstrap";
import Tarjeta from "./Tarjeta";
import '../index.css';


const Lista = () => {
  return (
    <>
      <Container>
        <h1 className="my-3 text-center title">#Nuestros comedores y merenderos</h1>
        <Accordion className="mt-5" defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Ecuador 2745, Libertad Calles Alberto Novion y Matura, Agustín Ferrari
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="m-0">
                <Row className="flex">
                  <Col className="m-0">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52484.73353443234!2d-58.69051971797958!3d-34.69771728123741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc13e604925df%3A0xcdeae4dde197552e!2sEcuador%202745%2C%20B1716KPA%20Libertad%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1600302129394!5m2!1ses-419!2sar" title="Ecuador 2745" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                  </Col>

                  <Col>
                    <Tarjeta />
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
             Ferrari Garcia Belloso 1626, Agustín Ferrari
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
              <Row className="flex">
                  <Col>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.621175572416!2d-58.76883118519128!3d-34.71473367088673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bceaee799e1117%3A0x4e39f4a72a9f83be!2sAgust%C3%ADn%20Ferrari%201626%2C%20B1724AZH%20Mariano%20Acosta%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1600302361396!5m2!1ses-419!2sar" width="400" height="350" frameborder="0"  style={{border:0}} allowfullscreen="" title="Ferrari Garcia Belloso 1626" aria-hidden="false" tabindex="0"></iframe>
                  </Col>

                  <Col>
                    <Tarjeta />
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
            Vacarezza 1090, Agustín Ferrari
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
              <Row className="flex">
                  <Col>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.324743472139!2d-58.793892185191815!3d-34.69698826994527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bceb2cfb5097e3%3A0xe0fb861f5423a59d!2sAlberto%20Vacarezza%201090%2C%20B1723EWT%20Mariano%20Acosta%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1600302406543!5m2!1ses-419!2sar" width="400" height="350" frameborder="0"  style={{border:0}} allowfullscreen="" title="Vacarezza 1090" aria-hidden="false" tabindex="0"></iframe>
                  </Col>

                  <Col>
                    <Tarjeta />
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
            Gargia Velloso y Carlos Ocanto, Agustín Ferrari
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
              <Row className="flex">
                  <Col>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.5187487365365!2d-58.79786638519201!3d-34.69209366968566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc94cd9363b949%3A0x21185a7a3f0b992!2sCarlos%20Ocantos%20%26%20Garc%C3%ADa%20Velloso%2C%20Mariano%20Acosta%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1600302445271!5m2!1ses-419!2sar" width="400" height="350" frameborder="0" style={{border:0}} allowfullscreen="" title="Gargia Velloso y Carlos Ocanto" aria-hidden="false" tabindex="0"></iframe>
                  </Col>

                  <Col>
                    <Tarjeta />
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
            Alfonsina Storni 2790, Barrio La Pradera, Agustín Ferrari
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
              <Row className="flex">
                  <Col>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.8122716342186!2d-58.800402385192314!3d-34.684687169292914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc94c575b5cf61%3A0x8868f0d178c4a1db!2sAlfonsina%20Storni%202790%2C%20B1723HSR%20Mariano%20Acosta%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1600302518202!5m2!1ses-419!2sar" width="400" height="350" frameborder="0" style={{border:0}} allowfullscreen="" title="Alfonsina Storni 2790" aria-hidden="false" tabindex="0"></iframe>
                  </Col>

                  <Col>
                    <Tarjeta />
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="5">
            Montevideo 900, Mariano Acosta
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
              <Row className="flex">
                  <Col>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.466125837962!2d-58.78282578519104!3d-34.718643271094116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bceae301e13393%3A0xde036597c11d4ebe!2sMontevideo%20900%2C%20B1724BXJ%20Mariano%20Acosta%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1600302601167!5m2!1ses-419!2sar"  frameborder="0" style={{border:0}} allowfullscreen="" title="Montevideo 900" aria-hidden="false" tabindex="0"></iframe>
                  </Col>

                  <Col>
                    <Tarjeta />
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="6">
            Colombia 2686, Libertad
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="6">
              <Card.Body>
              <Row className="flex">
                  <Col>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.6669983007005!2d-58.66780738519126!3d-34.71357817082534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc13dd4e99875%3A0xc2b8711c6562ddf8!2sColombia%202686%2C%20B1716KKH%20Libertad%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1600302652744!5m2!1ses-419!2sar" width="400" height="350" frameborder="0" style={{border:0}} allowfullscreen="" title="Colombia 2686" aria-hidden="false" tabindex="0"></iframe>
                  </Col>

                  <Col>
                    <Tarjeta />
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="7">
            Colombia 2010, Libertad 
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="7">
              <Card.Body>
              <Row className="flex">
                  <Col>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.8482893584605!2d-58.67411478519135!3d-34.709006270582805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc119ccbfc9d7%3A0xaeefd8260e2b2907!2sColombia%202010%2C%20B1716KJP%20Libertad%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1600302718543!5m2!1ses-419!2sar" width="400" height="350" frameborder="0" style={{border:0}} allowfullscreen="" title="Colombia 2010" aria-hidden="false" tabindex="0"></iframe>
                  </Col>

                  <Col>
                    <Tarjeta />
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="8">
            Alem 3481, Parque San Martin 
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="8">
              <Card.Body>
              <Row className="flex">
                  <Col>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.5146109261736!2d-58.733117785192!3d-34.69219806969125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc01be4ae69f7%3A0xdcfab1b61ebbb479!2sLeandro%20N.%20Alem%203481%2C%20B1721IKE%20Merlo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1600302771264!5m2!1ses-419!2sar" title="Alem 3481" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                  </Col>

                  <Col>
                    <Tarjeta />
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="9">
            Ángel Carranza e Isabel de Bernes, Barrio Papa Francisco
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="9">
              <Card.Body>
              <Row className="flex">
                  <Col>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.1598879023654!2d-58.73022928519076!3d-34.72636397150404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc1da9d5c3a05%3A0x371ed520e1f06846!2sIsabel%20de%20Barnes%20%26%20%C3%81ngel%20Carranza%2C%20Pontevedra%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1600302834945!5m2!1ses-419!2sar" title="Ángel Carranza e Isabel de Bernes" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                  </Col>

                  <Col>
                    <Tarjeta />
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="10">
            Rondeau 1426, Barrio Santa Isabel 
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="10">
              <Card.Body>
              <Row className="flex">
                  <Col>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.7039171415963!2d-58.79424238519027!3d-34.73785687211415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bceba8e11039a7%3A0x226e962bbeeffcd6!2sRondeau%201426%2C%20B1724DLN%20Mariano%20Acosta%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1600302878410!5m2!1ses-419!2sar" title=" Rondeau 1426" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                  </Col>

                  <Col>
                    <Tarjeta />
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="11">
            Pehuajo 1960, Libertad
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="11">
              <Card.Body>
              <Row className="flex">
                  <Col>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.8291695080297!2d-58.67147018519146!3d-34.70948847060837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc1180370c181%3A0x3bbbd617e8262adc!2sPehuaj%C3%B3%201960%2C%20B1716FCL%20Libertad%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1600302928810!5m2!1ses-419!2sar" title=" Pehuajo 1960" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                  </Col>

                  <Col>
                    <Tarjeta />
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="12">
            Calle Pirovano 25, Barrio Tobal
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="12">
              <Card.Body>
              <Row className="flex">
                  <Col>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.1586821442165!2d-58.75548138519254!3d-34.675944368829484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc954f222c6983%3A0xc027d8d5db391310!2sDUA%2C%20Pirovano%2025%2C%20B1721%20Merlo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1600303005176!5m2!1ses-419!2sar" title="Calle Pirovano 25" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                  </Col>

                  <Col>
                    <Tarjeta />
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    </>
  );
};
export default Lista;
