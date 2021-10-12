import React from 'react'
import { Carousel } from 'react-bootstrap';
import './Caroselapp.css'
import carosel from '../Imagenes/carosel_uno.jpeg'
import dos from '../Imagenes/carosel_dos.jpeg'
import tres from '../Imagenes/Carosel_tres.jpeg'

const Carouselapp = () => {
  return (<Carousel className="Movimiento">
  <Carousel.Item>
  <img
    className="uno carousel d-block w-100"
    src={carosel}
    alt="First slide"
    
  />
  <Carousel.Caption>
   
  </Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
  <img
    className="d-block w-100"
    src={dos}
    alt="Second slide"
  />

  <Carousel.Caption>
    
  </Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
  <img
    className="d-block w-100 "
    src={tres}
    alt="Third slide"
  />

  <Carousel.Caption>
   
  </Carousel.Caption>
</Carousel.Item>
</Carousel>
    
  )
}

export default Carouselapp

