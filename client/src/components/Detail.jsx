import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import logo from "../images/logo4.png"

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
        <div className='container pt-4'>
            <div className='pt-4'></div>
                <nav className="row" style={{background: "white"}}>
                    <h1 className='text-primary'>{test.name}</h1>
                    <div class="row justify-content-start">
                    <div class="col-4">
                    <ul className="list-unstyled text-info-emphasis">
                    <li className='text-info'><strong> Test #{id}</strong></li>
                    <li className="col-12 col-md-3 d-flex aling-items-center justyfy-content-center">
                            <img src={logo} className="mx-2 pb-4" style={{ height: '250px'}} alt=""/>
                        </li>   
                    </ul>  
                    </div>
                    <div class="col-4">
                    <ul className="pt-4 text-info list-unstyled" >
                        <li className='fs-4'><strong>{test.description}</strong></li>
                        <li className='fs-4'><strong>Precio  ${test.price}.00 </strong></li>  
                        <li className='fs-4'><strong>Tiempo estimado: {test.time}</strong></li>   
                        <li className='fs-4'><strong>Tipo de muestra: {test.sample}</strong></li> 
                        <li className='fs-4'><strong>Categoria: {test.category}</strong></li> 
                    </ul>  
                    </div>
                    </div>
                </nav>
            <div className='pt-4'></div>
        </div>
    )
}
