import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import fitness1 from '../../assets/fitness/DSC_6526.jpg'
import fitness2 from '../../assets/fitness/DSC_6581.jpg'
import fitness3 from '../../assets/fitness/DSC_6602.jpg'
import fitness4 from '../../assets/fitness/DSC_6620.jpg'
import fitness5 from '../../assets/fitness/DSC_6648.jpg'



export default function fitness() {
    return (
    
    
        <div >
            <Carousel className="image-container mt-3 mb-5 w-50">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={fitness1}
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
      src={fitness2}
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
      src={fitness3}
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
      src={fitness4}
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
      src={fitness5}
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
