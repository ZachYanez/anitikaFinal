import React from "react";
import Carousel from "react-bootstrap/Carousel";
import corp1 from "../../assets/corp/A51B2325.jpg";
import corp2 from "../../assets/corp/A51B2359.jpg";
import corp3 from "../../assets/corp/A51B2607.jpg";
import corp4 from "../../assets/corp/A51B2745.jpg";
import corp5 from "../../assets/corp/A51B2819.jpg";
import corp6 from "../../assets/corp/A51B2977.jpg";

import fashion1 from "../../assets/fashion/5032_Edit.jpg";
import fashion2 from "../../assets/fashion/5095_Edit.jpg";
import fashion3 from "../../assets/fashion/5180_Edit.jpg";
import fashion4 from "../../assets/fashion/5204_Edit.jpg";
import fashion5 from "../../assets/fashion/5296_Edit.jpg";
import fashion6 from "../../assets/fashion/5571_Edit.jpg";

export default function corp() {
  return (
    <div>
      <Carousel className="corpPics">
        <Carousel.Item>
          <img className="d-block w-100" src={corp1} alt="First slide" />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
          <Carousel.Item>
            <img className="d-block w-100" src={fashion1} alt="First slide" />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={corp2} alt="Third slide" />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src={fashion2} alt="First slide" />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        
        <Carousel.Item>
          <img className="d-block w-100" src={corp3} alt="Third slide" />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src={fashion3} alt="First slide" />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={corp4} alt="Third slide" />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src={fashion4} alt="First slide" />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={corp5} alt="Third slide" />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src={fashion5} alt="First slide" />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={corp6} alt="Third slide" />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
          
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src={fashion6} alt="First slide" />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
    </div>
  );
}






