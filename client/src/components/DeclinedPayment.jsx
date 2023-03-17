import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button'


export default function SuccessfulPayment() {
  const navigate = useNavigate();


  const onClickHandler = () => {
    navigate("/cart");
  };

  return (
    <div 
    style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    }}
    >
      <div
        style={{
            background: "#830c0685",
            height: "250px",
            width: "350px",
            margin: "40px",
            textAlign: "center",
            borderRadius: "10px"
        }}
      >
        <h1
        style={{
            margin: "20px"
        }}
        >su pago ha sido rechazado</h1>
        <Button variant="outline-dark" onClick={onClickHandler}>CONTINUAR</Button>{' '}
      </div>
    </div>
  );
}