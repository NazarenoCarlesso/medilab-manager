import React from 'react'
import { useSelector } from "react-redux"
import Carousel from 'react-bootstrap/Carousel'
import Stack from 'react-bootstrap/Stack'
import Test from './Test'

function CarouselCards() {
    const tests = useSelector(state => state.tests)

    return (
        <Carousel variant="dark">
            <Carousel.Item style={{ height: 360 }}>
                <Stack direction="horizontal"
                    className="h-100 justify-content-center align-items-center" gap={3}>
                    {
                        tests.slice(0, 4).map(t => <Test key={t.id} id={t.id} price={t.price}
                            description={t.description} name={t.name} />)
                    }
                </Stack>
            </Carousel.Item>
            <Carousel.Item style={{ height: 360 }}>
                <Stack direction="horizontal"
                    className="h-100 justify-content-center align-items-center" gap={3}>
                    {
                        tests.slice(4, 8).map(t => <Test key={t.id} id={t.id} price={t.price}
                            description={t.description} name={t.name} />)
                    }
                </Stack>
            </Carousel.Item>
            <Carousel.Item style={{ height: 360 }}>
                <Stack direction="horizontal"
                    className="h-100 justify-content-center align-items-center" gap={3}>
                    {
                        tests.slice(8, 12).map(t => <Test key={t.id} id={t.id} price={t.price}
                            description={t.description} name={t.name} />)
                    }
                </Stack>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselCards;