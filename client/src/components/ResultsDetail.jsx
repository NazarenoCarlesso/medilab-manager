import React, { useEffect, useState } from "react";
import logo from "../images/logo4.png";
import Modal from "react-bootstrap/Modal";
import Badge from "react-bootstrap/esm/Badge";



const BACK = process.env.REACT_APP_BACK;

export default function ResultsDetail(props) {
  const { id, value, showResult, setShowResult } = props;

  return (
    <div>
      {showResult === true ? (
        <Modal
          
          show={showResult}
          onHide={() => setShowResult(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header className="bg-secondary text-primary" closeButton>
            <Modal.Title >
              <strong>Resultados</strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                width: "100%",
              }}
            >
              <Badge bg="white" style={{ width: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "100%",

                  }}
                >
                  <img
                      src={logo}
                      className="mx-2 p-2"
                      style={{ height: "150px" }}
                      alt=""
                    />
                  <div
                   
                  >
                    <ul className="pt-4 text-info list-unstyled">
                      <li className="fs-4 pt-4">
                      Tipo de prueba . . . . . . .  <strong>{id}</strong>
                      </li>
                      <li className="fs-4 pt-4">Resultado  . . . . . . <strong>{value}</strong> </li>
                    </ul> 
                    </div>
                  </div>
              </Badge>
              <div className="pt-4"></div>
            </div>
          </Modal.Body>
        </Modal>
      ) : null}
    </div>
  );
}