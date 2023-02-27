import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { addToCart } from '../reducer'

export default function Test({ id, name, description, price }) {
    const dispatch = useDispatch()

    return (
        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Card.Title>${price}.00</Card.Title>
                <Button variant="primary" as={Link} to={`/detail/${id}`}>Detail</Button>
                <Button variant="primary" onClick={() => dispatch(addToCart(id))}>Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}
