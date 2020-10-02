import React from "react";
import Contacto from "./Contacto";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-title">Raíces Merlenses</p>
      <Contacto />
      <p className="footer text-mutted text-center mb-0">
        Developed with
        <span role="img" aria-label="heart-emoji">
          ❤️
        </span>{" "}
        by Jess, Carla, Federico y Matías{" "}
      </p>
    </div>
  );
};

export default Footer;
