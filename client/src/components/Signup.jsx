import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { setSessionId } from '../reducer'

const BACK = process.env.REACT_APP_BACK

export default function Signup() {
    const dispatch = useDispatch()

    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const login = await fetch(`${BACK}/patients/login`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }).then(response => response.json())

        dispatch(setSessionId(login.id))
    }

    return (
        <div className='container text-center'>
            <div className='row'>
                <div className='col'>
                    Sign Up
                </div>
                <div className='col'>
                    Log In
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control name='username' value={user.username} onChange={handleChange} type="text" placeholder="Enter username" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' value={user.password} onChange={handleChange} type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}
