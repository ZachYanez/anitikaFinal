import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import fashion1 from '../../assets/fashion/5032_Edit.jpg'
import fashion2 from '../../assets/fashion/5095_Edit.jpg'
import fashion3 from '../../assets/fashion/5180_Edit.jpg'
import fashion4 from '../../assets/fashion/5204_Edit.jpg'
import fashion5 from '../../assets/fashion/5296_Edit.jpg'
import fashion6 from '../../assets/fashion/5571_Edit.jpg'


import fashion7 from '../../assets/fashion/IMG_3848.jpg'
import fashion8 from '../../assets/fashion/IMG_3857.jpg'
import fashion9 from '../../assets/fashion/IMG_3912.jpg'
import fashion10 from '../../assets/fashion/IMG_3936.jpg'
import fashion11 from '../../assets/fashion/IMG_4276.jpg'







export default function fashion() {
    return (
    
        
        <div >
            <Carousel 
            className="image-container mt-3 w-50">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={fashion1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
   <Carousel.Item>
    <img
      className="d-block w-100"
      src={fashion2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={fashion3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item> 
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={fashion4}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>

<Carousel.Item>
    <img
      className="d-block w-100"
      src={fashion5}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item> 
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={fashion6}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item> 
  </Carousel>
  <br/>

  <Carousel 
            className="image-container mb-5 w-50">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={fashion7}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
   <Carousel.Item>
    <img
      className="d-block w-100"
      src={fashion8}
      alt="Third slide"
    />7

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={fashion9}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item> 
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={fashion10}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>

<Carousel.Item>
    <img
      className="d-block w-100"
      src={fashion11}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>  
  </Carousel>
        </div>
        
    )
}
