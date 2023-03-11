import React from "react";
import Button from "react-bootstrap/Button";
import logo from "../images/logo4.png";

export default function Result({
  item,
  value,
  setResultId,
  setResultValue,
  setShowResult,
}) {

  return (
    <div
      style={{  marginTop:"5%",
                marginBottom:"5%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                width: "100%",
              }}
    >
        <Button
                className="p-4 shadow-sm"
                style={{ width: "400px", height: "100px" }}
                variant="light"
                onClick={() => {
                setResultId(item);
                setResultValue(value);
                setShowResult(true);
              }}
            >
            <img className="p-3" src={logo} style={{ width: "80px", height: "80px" }}  alt=""/> 
        
            <strong>{item}</strong>
        </Button>
    </div>
  );
}
