import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BACK = process.env.REACT_APP_BACK

export default function Detail() {
    const { id } = useParams()

    const [test, setTest] = useState(id)

    useEffect(() => {
        fetch(`${BACK}/tests/${id}`)
            .then(response => response.json())
            .then(data => setTest(data))
    }, [id])

    return (
        <div>
            Detail #{id}
            <h1>{test.name}</h1>
            <h3>{test.description}</h3>
            <h2>${test.price}.00</h2>
            <h4>Tiempo estimado: {test.time}</h4>
            <h4>Tipo de muestra: {test.sample}</h4>
            <h4>Categoria: {test.category}</h4>
        </div>
    )
}
