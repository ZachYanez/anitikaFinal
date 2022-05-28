import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import Anitaka1 from "../../assets/lifestyle/Anitaka1.jpg";
import Anitaka2 from "../../assets/lifestyle/Anitaka2.jpg";
// import Anitaka3 from "../../assets/lifestyle/Anitaka3.jpg";
import Anitaka4 from "../../assets/lifestyle/Anitaka4.jpg";
import Anitaka5 from "../../assets/lifestyle/Anitaka5.jpg";
// import Anitaka6 from "../../assets/lifestyle/Anitaka6.jpg";
// import Anitaka7 from "../../assets/lifestyle/Anitaka7.jpg";
// import Anitaka8 from "../../assets/lifestyle/Anitaka8.jpg";
// import Anitaka9 from "../../assets/lifestyle/Anitaka9.jpg";

export default function lifestyleCarousel() {
  return (
    <div className="shadow">
      <Carousel className="printworkPics shadow">
        <Carousel.Item>
          <img className="d-block w-100" src={Anitaka2} alt="First slide" />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Anitaka4} alt="Second slide" />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Anitaka5} alt="Third slide" />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
