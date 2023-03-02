import React from 'react'
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import QuoterContainer from './QuoterContainer'
import Slides from './Slides'
import Test from "./Test";
import { Link } from 'react-router-dom';

export default function Home() {

    const tests = useSelector((state) => state.tests);


    return (
        <div>
   <Link to= "/comment" > <button>Coment</button>
   </Link> 

          <br />
          <br />
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