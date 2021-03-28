import React from "react";
import Carousel from "react-bootstrap/Carousel";
import headshot1 from "../../assets/headshots/headshot1.jpg";
import headshot2 from "../../assets/headshots/headshot2.jpg";
import headshot3 from "../../assets/headshots/headshot3.jpg";
import headshot4 from "../../assets/headshots/headshot4.jpg";
import headshot5 from "../../assets/headshots/headshot5.jpg";
import headshot6 from "../../assets/headshots/headshot6.jpg";
import headshot7 from "../../assets/headshots/headshot7.jpg";
import headshot8 from "../../assets/headshots/headshot8.jpg";
import headshot9 from "../../assets/headshots/headshot9.jpg";

export default function headshot() {
  return (
    <div>
      <Carousel className="image-container mt-3 mb-5 w-50">
        <Carousel.Item>
          <img className="d-block w-100" src={headshot2} alt="First slide" />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={headshot1} alt="Third slide" />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={headshot3} alt="Third slide" />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={headshot4} alt="Third slide" />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={headshot6} alt="Third slide" />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={headshot7} alt="Third slide" />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={headshot5} alt="Third slide" />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={headshot8} alt="Third slide" />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={headshot9} alt="Third slide" />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
