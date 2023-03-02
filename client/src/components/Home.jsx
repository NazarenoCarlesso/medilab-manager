import React from 'react'
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import QuoterContainer from './QuoterContainer'
import Slides from './Slides'
import Test from "./Test";

export default function Home() {

    const tests = useSelector((state) => state.tests);


    return (
        <div>
            <Slides/>
            <hr/>
            <QuoterContainer/>
            <hr/>
            <Row md={3} className="g-4">
        {tests.map((test) => (
          <Test
            key={test.id}
            id={test.id}
            name={test.name}
            description={test.description}
            price={test.price}
          />
        ))}
      </Row>
        </div>
    )
}