import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "../images/slider1.jpg";
import carousel1 from "../images/carousel1.png";
import carousel3 from "../images/carousel2.jpg";
import carousel4 from "../images/carousel5.png";

const Slider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={slider1} alt="First slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
