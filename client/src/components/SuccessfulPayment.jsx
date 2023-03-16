import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const BACK = process.env.REACT_APP_BACK;

export default function SuccessfulPayment() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const cart = useSelector((state) => state.cart);

  const onClickHandler = async () => {
    const config = { headers: { token: `${token}` } };
    const data = { tests: cart };
    try {
      await axios.post(`${BACK}/orders`, data);
      navigate("/cart", { state: { showAlert: true } });
    } catch (error) {console.log(error.response.data);}
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#002d0085",
          height: "250px",
          width: "350px",
          margin: "40px",
          textAlign: "center",
          borderRadius: "10px",
        }}
      >
        <h1
          style={{
            margin: "20px",
          }}
        >
          su pago ha finalizado de manera exitosa
        </h1>
        <Button variant="outline-success" onClick={onClickHandler}>
          CONTINUAR
        </Button>{" "}
      </div>
    </div>
  );
}
