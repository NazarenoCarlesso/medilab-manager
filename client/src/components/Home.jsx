import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../reducer'

const BACK = process.env.REACT_APP_BACK

export default function Home() {
    const dispatch = useDispatch()
    const value = useSelector(state => state.value)

    const [patients, setPatients] = useState([])

    useEffect(() => {
        fetch(`${BACK}/patients`)
            .then(response => response.json())
            .then(data => setPatients(data))
    }, [])

    return (
        <div>
            Home
            <div>
                {value}
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            {JSON.stringify(patients)}
        </div>
    )
}