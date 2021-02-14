import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Know1 from '../../assets/know/Amazon.PNG'
import Know2 from '../../assets/know/Dynamax.PNG'
import Know3 from '../../assets/know/Fogo.PNG'
import Know4 from '../../assets/know/IMG_3869.PNG'


export default function headshot() {
    return (
    
    
        <div >
            <Carousel className="image-container mt-3 mb-5 w-50">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Know1}
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
      src={Know2}
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
      src={Know3}
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
      src={Know4}
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
