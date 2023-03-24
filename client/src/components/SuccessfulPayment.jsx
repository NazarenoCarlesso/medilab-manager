import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const BACK = process.env.REACT_APP_BACK;

export default function SuccessfulPayment() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const cart = useSelector((state) => state.cart);

  const onClickHandler = async () => {
    const config = { headers: { token: `${token}` } };
    const data = { tests: cart };
    try {
      await axios.post(`${BACK}/orders`, data, config);
      navigate("/cart", { state: { showAlert: true } });
    } catch (error) {console.log(error.response.data);}
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "raleway",
      }}
      >
      <div
        style={{
          background: "rgb(61 195 61 / 45%)",
          height: "300px",
          width: "350px",
          margin: "40px",
          textAlign: "center",
          borderRadius: "10px",
          color: "#223",
          boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
        }}  
      >
        <img alt="check" src="check.png"
          style={{
            height: "55px",
            width: "auto",
            marginTop: "10px",
          }}
        />
        <h1
          style={{
            margin: "10px",
          }}
        >
          su pago ha finalizado de manera exitosa
        </h1>
        <button className="payment-button" onClick={onClickHandler}>
          CONTINUAR
        </button>
      </div>
    </div>
  );
}
