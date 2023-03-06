import React from 'react'
import Row from "react-bootstrap/Row";
import QuoterContainer from './QuoterContainer'
import Slides from './Slides'
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
            <div style={{background: "white"}}>
            <Row>
            <h3 className='d-flex justify-content-center'style={{padding: 10, color: "navy"}}>Mas Vendidos</h3>
            <p className='d-flex justify-content-center'style={{color: "navy"}}>Los favoritos dde nuestros clientes.</p>
            </Row>
                <CarouselCards/>
            </div>
            <Row className="pt-4"/>
        </div>
    )
}