import { useNavigate } from "react-router-dom";

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
        alignItems: "center",
        fontFamily: "raleway",
      }}
    >
      <div
        style={{
          background: "rgb(207 50 50 / 45%)",
          height: "300px",
          width: "350px",
          margin: "40px",
          textAlign: "center",
          borderRadius: "10px",
          color: "#223",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        }}
      >
        <img
          alt="delete"
          src="delete-button.png"
          style={{
            height: "55px",
            width: "auto",
            marginTop: "10px",
          }}
        />
        <h1
          style={{
            margin: "20px",
          }}
        >
          su pago ha sido rechazado
        </h1>
        <button className="payment-button" onClick={onClickHandler}>CONTINUAR</button>{" "}
      </div>
    </div>
  );
}
