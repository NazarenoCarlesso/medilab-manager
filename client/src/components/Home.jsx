import React from 'react'
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import QuoterContainer from './QuoterContainer'
import Slides from './Slides'
import Test from "./Test";
import Carousel from './Carousel'
import CarouselCards from './CarouselCards'

export default function Home() {
    
    return (
        <div>  
          <div>
            <Carousel/>
          </div>
            <Slides/>
            <hr/>
            <QuoterContainer/>
            <hr/>
            <div style={{background: "aliceblue"}}>
            <Row>
            <h3 className='d-flex justify-content-center'style={{padding: 20, color: "navy"}}>Nuestros Paquetes</h3>
            <p className='d-flex justify-content-center'style={{color: "navy"}}>Ponemos a tu disposición los siguientes paquetes de diagnóstico.</p>
            </Row>
                <CarouselCards/>
            </div>
            <Row md={3} className="g-4">
            </Row>
        </div>
    )
}