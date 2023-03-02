
import Button from 'react-bootstrap/esm/Button';
import style from "./comment.module.css";


function Formm() {

  return (

 <div>
 <form className={style.form} action="">
        <p class={style.clasificacion}>
         <label >★</label>
         <label >★</label>
         <label>★</label>
         <label >★</label>
         <label >★</label>
        </p>
</form>

<form>
  <textarea  className={style.container} placeholder="Write..." rows="5" cols="50"></textarea>
  <Button  className={style.button}  variant="success">Comment</Button>
</form>
      
     </div>
  
  );
}

export default Formm;