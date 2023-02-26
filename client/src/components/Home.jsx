import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../reducer'

const BACK = process.env.REACT_APP_BACK

export default function Home() {
    const dispatch = useDispatch()
    const value = useSelector(state => state.value)

    const [tests, setTests] = useState([])

    useEffect(() => {
        fetch(`${BACK}/tests`)
            .then(response => response.json())
            .then(data => setTests(data))
    }, [])

    return (
        <div>
            Home
            <div>
                {value}
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            {tests.map(t => <><span><b>{t.name}</b> | Precio: $ {t.price} | Tiempo Estimado: {t.time} | Muestra: {t.sample} | Categoria: {t.category}</span><br/></>)}
        </div>
    )
}