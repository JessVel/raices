import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import donar from "../images/bank.svg";
import "../css/Donar.css";

const Donar = () => {
  return (
    <>
      <section id="donar" className="section2"></section>
        <Container fluid className="donar">
          <h1 className="titulo">#Donar</h1>
         <div className="flex">
        
            <div>
              <img fluid src={donar} className="icon" alt="Donar" ></img>
            </div>

            <div>
              <p className="help">Ayudanos a ayudar!</p>
              <p className="donar2">
                Hacé tu donación con el monto que elijas desde Mercado Pago. Los
                habitantes de Merlo estarán muy agradecidos.
              </p>
             <button className="btn-btn mb-4">
             <Link to="donar">
                Donar!
              </Link>
             </button>
    
          </div>
         </div>
        </Container>
      
    </>
  );
};
export default Donar;
//className="d-flex align-items-stretch justify-content-center text-center
