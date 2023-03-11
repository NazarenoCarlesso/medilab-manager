import Button from 'react-bootstrap/esm/Button';
import style from "./Comment.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { createReview } from '../utils/request';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'



function valida(input) {
  let errors = {}
  if (!input.comment) {
    return errors;
  }
}



export default function Comment() {
  const BACK = process.env.REACT_APP_BACK
  const toke = useSelector((state) => state.sessionId?.token);

  const [errors, setErrors] = useState({ comment: "" });
  const [input, setInput] = useState({ comment: "" })
  
  const inputCommentString = JSON.stringify(input.comment);

  function handleInputChange(e) {
    setInput({
      ...input, [e.target.name]: e.target.value
    })
    setErrors(valida({
      ...input, [e.target.name]: e.target.value
    }))
  }


  const handleComment= (token) => {
    var mHeaders = new Headers({ 'token': token, 'Content-Type': 'application/json', });
    fetch(`${BACK}/reviews`, {
      method: 'POST',
      headers: mHeaders,
      body: JSON.stringify({"content": inputCommentString})
    },
      console.log(token))
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault("");
    handleComment(toke, input);
     setInput({comment: "" });
  }


  const [selectedRating, setSelectedRating] = useState("");
  function handleRatingChange(event) {
    const rating = event.target.value;
    setSelectedRating(rating);
 console.log(selectedRating)
 }


console.log(selectedRating)


  return (
    <div>

      <form onSubmit={handleSubmit}>
<div className={style.bor}>  
<form className={style.form} action=""> 
      <p class={style.clasificacion}>
  <input id="radio1" type="radio" name="estrellas" value="5" onChange={handleRatingChange} checked={selectedRating === "5"} />
  <label htmlFor="radio1" className={selectedRating === "5" ? style.rated : style.co1}>🥰</label>
  <input id="radio2" type="radio" name="estrellas" value="4" onChange={handleRatingChange} checked={selectedRating === "4"} />
  <label htmlFor="radio2" className={selectedRating === "4" ? style.rated : style.co1}>🙂</label>
  <input id="radio3" type="radio" name="estrellas" value="3" onChange={handleRatingChange} checked={selectedRating === "3"} />
  <label htmlFor="radio3" className={selectedRating === "3" ? style.rated2 : style.co1}>😐</label>
  <input id="radio4" type="radio" name="estrellas" value="2" onChange={handleRatingChange} checked={selectedRating === "2"} />
  <label htmlFor="radio4" className={selectedRating === "2" ? style.rated2 : style.co1}>🙁</label>
  <input id="radio5" type="radio" name="estrellas" value="1" onChange={handleRatingChange} checked={selectedRating === "1"} />
  <label htmlFor="radio5" className={selectedRating === "1" ? style.rated3 : style.co1}>😟</label>

</p>

           </form>      
   <textarea className={`${style.select}`} type="text" value={input.comment} name="comment" onChange={(e) => handleInputChange(e)} placeholder="Comment..."></textarea>
        {/* <Button type='submit' className={style.button}  >Post</Button> */}
        <Button type='submit' className={style.button}>  post  </Button>
        </div>
         </form>
   
    </div>


  );}