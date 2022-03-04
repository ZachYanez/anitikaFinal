import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Kayden1 from "../../assets/kayden/Kayden1.jpg";
import Kayden2 from "../../assets/kayden/Kayden2.jpg";
import Kayden3 from "../../assets/kayden/Kayden3.jpg";
import Kayden4 from "../../assets/kayden/Kayden4.jpg";
import Kayden5 from "../../assets/kayden/Kayden5.jpg";
import Kayden6 from "../../assets/kayden/Kayden6.jpg";

import Kayden7 from "../../assets/kayden/Kayden7.jpg";
import Kayden8 from "../../assets/kayden/Kayden8.jpg";
import Kayden9 from "../../assets/kayden/Kayden9.jpg";
export default function Kayden() {
  return (
    <div className="shadow">
      <Carousel className="printworkPics shadow ">
        <Carousel.Item>
          <img className="d-block w-100" src={Kayden5} alt="First slide" />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Kayden4} alt="Second slide" />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Kayden7} alt="Third slide" />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Kayden3} alt="Third slide" />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        {/*
        <Carousel.Item>
          <img className="d-block w-100" src={print5} alt="Third slide" />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={print6} alt="Third slide" />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
}
