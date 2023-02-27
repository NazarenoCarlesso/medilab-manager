import React from 'react'
import { useSelector } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Test from './Test'

export default function Home() {
    const tests = useSelector(state => state.tests)
    const samples = useSelector(state => state.samples)
    const categories = useSelector(state => state.categories)

    return (
        <div>
            <b>Samples:</b> {samples.join(' | ')}
            <hr/>
            <b>Categories:</b> {categories.join(' | ')}
            <hr/>
            <Row md={3} className="g-4">
                {tests.map(test =>
                    <Test
                        key={test.id}
                        id={test.id}
                        name={test.name}
                        description={test.description}
                        price={test.price}
                    />
                )}
            </Row>
        </div>
    )
}