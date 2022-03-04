import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import print1 from "../../assets/printwork/print1.jpg";
import print5 from "../../assets/printwork/print5.jpg";
import print6 from "../../assets/printwork/print6.jpg";
import print7 from "../../assets/printwork/print7.jpg";
// import print5 from "../../assets/print/A51B2819.jpg";
// import print6 from "../../assets/print/A51B2977.jpg";

// import fashion1 from "../../assets/fashion/5032_Edit.jpg";
// import fashion2 from "../../assets/fashion/5095_Edit.jpg";
// import fashion3 from "../../assets/fashion/5180_Edit.jpg";
// import fashion4 from "../../assets/fashion/5204_Edit.jpg";
// import fashion5 from "../../assets/fashion/5296_Edit.jpg";
// import fashion6 from "../../assets/fashion/5571_Edit.jpg";

export default function atHomePics() {
  return (
    <div className="shadow">
      <Carousel className="printworkPics shadow">
        <Carousel.Item>
          <img className="d-block w-100" src={print5} alt="First slide" />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={print6} alt="Second slide" />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={print7} alt="Third slide" />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* <Carousel.Item>
          <img className="d-block w-100" src={print4} alt="Third slide" />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

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
