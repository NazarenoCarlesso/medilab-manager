import Button from 'react-bootstrap/esm/Button';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';




function valida(input) {


    let errors = {}
    if (!input.comment) {
        errors.comment = "El comentario no puede estar vacío";
    } else if (input.comment.length <= 16 || input.comment.length === 1) {
        errors.comment = "El comentario debe ser de más de 16 caracteres";
    }
    return errors
}


export default function Comment() {
    const [mostrarBoton, setMostrarBoton] = useState(false);
    const BACK = process.env.REACT_APP_BACK
    const toke = useSelector((state) => state.token);
    const [errors, setErrors] = useState({ comment: "" });
    const [input, setInput] = useState({ comment: "" })

    useEffect(() => {
        if (!errors.comment) {
            setMostrarBoton(true);
        } else if (errors) {
            setMostrarBoton(false);
        }
        if (!input.comment) {
            setMostrarBoton(false)
        }
    }, [errors, input]);

    function handleInputChange(e) {
        setInput({
            ...input, [e.target.name]: e.target.value
        })
        setErrors(valida({
            ...input, [e.target.name]: e.target.value
        }))
    }

    const handleComment = async (token) => {
        try {
            var mHeaders = new Headers({ 'token': token, 'Content-Type': 'application/json', });
            await fetch(`${BACK}/reviews`, {
                method: 'POST',
                headers: mHeaders,
                body: JSON.stringify({ "content": input.comment })
            })
                .then((res) => {
                    if (res.status === 400) return res.json()
                    if (res.status === 401) return "Fallo en el servidor"
                    if (res.status === 201) return ("cargado")
                })
                .then((res) => (res.errors.map((error) => { return error.msg })))


        } catch (error) {
            console.log('Error inesperado:', error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault("");
        handleComment(toke, input);
        setInput({ comment: "" });
        setMostrarBoton(false);

    }
    const gradientStyle = {
        backgroundImage: "linear-gradient(to bottom, #F5F5F5, rgb(78 78 78))"
    };

    return (
        <form onSubmit={handleSubmit}
            style={{ isplay: "flex", flexDirection: "column", alignItems: "flex-end", alignContent: "center", flexWrap: "wrap", }}>
            <textarea
                style={{ fontFamily: "Lucida Sans Unicode", fontSize: '16px', backgroundColor: "white", width: 450, height: 250, top: "300px", left: "300px", }}
                type="text" value={input.comment} name="comment" onChange={(e) => handleInputChange(e)} placeholder="Escribe tu comentario..."></textarea>
            {errors.comment && (<p style={{ fontSize: "16px", color: "red" }}>{errors.comment}</p>)}
            {mostrarBoton && (<Button style={{ ...gradientStyle, margin: "10px", width: "100px", }} type='submit' class="btn btn-outline-success">  Publicar  </Button>)}
        </form>
    );
}
