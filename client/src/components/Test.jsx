import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { addToCart } from '../reducer'

export default function Test({ id, name, description, price }) {
    const dispatch = useDispatch()

    return (
        <Card style={{ width: 250, height: 250 }}>
            <Card.Body>
                <Card.Title style={{ height: 50 }}>{name}</Card.Title>
                <Card.Text style={{ height: 70 }}>
                    {description}With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Card.Title style={{ marginBottom: 10 }}>${price}.00</Card.Title>
                <Button variant="primary" as={Link} to={`/detail/${id}`}>Detail</Button>
                <Button variant="primary" onClick={() => dispatch(addToCart(id))} style={{ marginLeft: 16 }}>Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}
