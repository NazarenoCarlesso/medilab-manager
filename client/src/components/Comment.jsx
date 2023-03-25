import { useRef } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { TextareaAutosize } from '@mui/material';






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
    const textareaRef = useRef(null);
    const BACK = process.env.REACT_APP_BACK
    const toke = useSelector((state) => state.token);
    const [errors, setErrors] = useState({ comment: "" });
    const [input, setInput] = useState({ comment: "" })


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
        textareaRef.current.value = "";

    }

    return (
        <form onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", alignContent: "center", flexWrap: "wrap", }} >
            <TextareaAutosize ref={textareaRef} style={{ fontFamily: "raleway", fontSize: '16px', backgroundColor: "white", width: 350, height: 200, }}
                placeholder="Escribe tu comentario..." name="comment" type="text" onChange={(e) => { handleInputChange(e) }} />
            {errors.comment && (<p style={{ fontFamily: "raleway", fontSize: "15px", position: 'absolute', top: "320px", color: "red" }}>{errors.comment}</p>)}
            {errors.comment || input.comment.length < 16 ? (<Button type="submit" variant="contained" style={{ position: 'absolute', top: "350px", }} disabled>Publicar</Button>) : (<Button style={{ fontFamily: "raleway", position: 'absolute', top: "350px", backgroundColor: "rgb(37 91 99)", color: "white", }} type='submit'>Publicar</Button>)}
        </form>
    );
}
