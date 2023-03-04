import React from 'react'
import Row from "react-bootstrap/Row"
import QuoterContainer from './QuoterContainer'
import Carousel from './Carousel'
import CarouselCards from './CarouselCards'

export default function Home() {
    return (
        <div>
            <Carousel />
            <hr style={{ border: '3px solid navy', opacity: 1 }} />
            <QuoterContainer />
            <hr style={{ border: '3px solid navy', opacity: 1 }} />
            <div style={{ background: "aliceblue" }}>
                <Row>
                    <h3 className='d-flex justify-content-center' style={{ padding: 20, color: "navy" }}>Nuestros Paquetes</h3>
                    <p className='d-flex justify-content-center' style={{ color: "navy" }}>Ponemos a tu disposición los siguientes paquetes de diagnóstico.</p>
                </Row>
                <CarouselCards/>
            </div>
        </div>
    )
}