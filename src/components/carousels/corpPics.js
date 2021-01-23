import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import corp1 from '../../assets/corp/A51B2325.jpg'
import corp2 from '../../assets/corp/A51B2359.jpg'
import corp3 from '../../assets/corp/A51B2607.jpg'
import corp4 from '../../assets/corp/A51B2745.jpg'
import corp5 from '../../assets/corp/A51B2819.jpg'
import corp6 from '../../assets/corp/A51B2977.jpg'


export default function corp() {
    return (
    
        
        <div >
            <Carousel className="corpPics">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={corp1}
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
      src={corp2}
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
      src={corp3}
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
      src={corp4}
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
      src={corp5}
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
      src={corp6}
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
