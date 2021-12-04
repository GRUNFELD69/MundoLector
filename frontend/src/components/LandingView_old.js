import React from "react";
import { Carousel } from "react-bootstrap";
import BotonSignIn from "./BotonSignIn";
import lanzamiento1 from '../assets/img/lanzamiento1.jpg';
import lanzamiento2 from '../assets/img/Lanzamiento-libro-cc-2.jpg';


const LandingView = () => {
  const carCaption = (
    <>
      <h1>Ingresa</h1>
      <h3>Miles de libros a tu alcance</h3>
      <BotonSignIn />
    </>
  );

  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={lanzamiento1}
          alt="lanzamiento1"
        />
        <Carousel.Caption style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          {carCaption}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={lanzamiento2}
          alt="lanzamiento2"
        />
        <Carousel.Caption style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          {carCaption}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default LandingView;
