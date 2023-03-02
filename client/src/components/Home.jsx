import React from 'react'
import { useSelector } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Carousel from './Carousel'
import CarouselCards from './CarouselCards'


export default function Home() {
    const samples = useSelector(state => state.samples)
    const categories = useSelector(state => state.categories)

    return (
        <div>
            <div>
                <Carousel/>
            </div>
            <b>Samples:</b> {samples.join(' | ')}
            <hr/>
            <b>Categories:</b> {categories.join(' | ')}
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