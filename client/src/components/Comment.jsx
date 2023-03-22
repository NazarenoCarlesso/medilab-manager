import Button from 'react-bootstrap/esm/Button';
import { useSelector } from 'react-redux';
import { useState } from 'react';




function valida(input) {
    let errors = {}
    if (!input.comment) {
        errors.comment = "El comentario no puede estar vacío";
    } else if (input.comment.length < 16 || input.comment.length === 1) {
        errors.comment = "El comentario debe ser de más de 16 caracteres";
    }
    return errors
}


export default function Comment() {
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
            var mHeaders = new Headers({ 'token': token, 'Content-Type': 'application/json', });
            await fetch(`${BACK}/reviews`, {
                method: 'POST',
                headers: mHeaders,
                body: JSON.stringify({ "content": input.comment })
            })
                .then((res)=> {
                    if(res.status === 400) return res.json()    //Si falló algo en el back, te devuelve un array con los errores
                    if(res.status === 401) return "Fallo en el servidor" //Fallo el token pero el cliente no sabe qué es eso
                })
                .then((res)=>(res.errors.map((error)=> {return error.msg}))) //Te da el array con los errores, el mayor numero es 2 (esta vacio y es menor a 16)
                //El formulario controlado debería evitar que el servidor responda con los mismos errores, se resuelve evitando el post del formulario si hay errores
    }


    const handleSubmit = (e) => {
        e.preventDefault("");
        handleComment(toke, input);
        setInput({ comment: "" });
    }
    return (
        <form onSubmit={handleSubmit}
            style={{ isplay: "flex", flexDirection: "column", alignItems: "flex-end", alignContent: "center", flexWrap: "wrap", }}>
            <textarea
                style={{ fontSize: '16px', backgroundColor: "white", width: 450, height: 250, top: "300px", left: "300px", }}
                type="text" value={input.comment} name="comment" onChange={(e) => handleInputChange(e)} placeholder="Escribe tu comentario..."></textarea>
            {errors.comment && (<p style={{ fontSize: "16px", color: "red" }}>{errors.comment}</p>)}
            <Button style={{ backgroundColor: "blue && white", margin: "10px", width: "100px", }} type='submit' class="btn btn-outline-success">  Publicar  </Button>
        </form>
    );
}