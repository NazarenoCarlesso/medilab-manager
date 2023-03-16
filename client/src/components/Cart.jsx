import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setItem } from "../utils/localStorage";

import OffCanvasCart from "./OffCanvasCart";
import BillCart from "./BillCart";
import Signup from "./Signup";
import SelectAppointment from "./SelectAppointment";
import { emptyCart, removeFromCart } from "../reducer";
import PopularUI from "./PopularUI";

const BACK = process.env.REACT_APP_BACK;

export default function Cart() {
  const dispatch = useDispatch();

  // Panel de pagos (agregar)
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertLogin, setShowAlertLogin] = useState(false);
  const [fromCart, setFromCart] = useState(false);
  const [openSA, setOpenSA] = useState(false);
  const handleOpenSA = () => setOpenSA(true);
  const handleCloseSA = () => setOpenSA(false);

  const handleShow = () => setShow(true);

  const cart = useSelector((state) => state.cart);
  const token = useSelector((state) => state.token);
  const [products, setProducts] = useState([]);

  useEffect(() => setItem("cart", cart), [cart]);

  useEffect(() => {
    Promise.all(cart.map((c) => fetch(`${BACK}/tests/${c}`).then((res) => res.json()))).then((products) => setProducts(products));
  }, [cart]);

  function handleClickDelete(e) {
    dispatch(removeFromCart(e.currentTarget.id));
  }

  function handleSubmit() {
    if (cart.length === 0) {
      alert("No tiene productos en el carrito de compras.");
    } else {
      handleOpenSA();
    }
  }

  return (
    <div
      style={{
        margin: "auto",
        paddingTop: "2%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {cart.length === 0 ? (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography variant="h3" fontWeight={700} sx={{ fontFamily: "Raleway", margin: 4 }}>
            Tu carrito de compra está vacío
          </Typography>
          <Typography variant="h5" fontWeight={700} sx={{ fontFamily: "Raleway", margin: 4 }}>
            Busca entre todos nuestros test el que necesites
          </Typography>
          <Button variant="contained" color="success" size="large" as={Link} to="/search" style={{ textDecoration: "none", color: "black" }}>
            BUSCA TU TEST
          </Button>
        </div>
      ) : (
        <div style={{ width: "90%", position: "relative" }}>
          <Button variant="contained" color="error" onClick={() => dispatch(emptyCart())} style={{ position: "absolute", right: "0px" }}>
            Vaciar carrito
          </Button>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              paddingTop: "5%",
            }}
          >
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">ID</TableCell>
                    <TableCell align="center">PRODUCTO</TableCell>
                    <TableCell align="center">PRECIO</TableCell>
                    <TableCell align="center">QUITAR</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((test, key) => {
                    return (
                      <TableRow key={key} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                        <TableCell component="th" scope="row" align="center">
                          {key + 1}
                        </TableCell>
                        <TableCell align="left">{test.name}</TableCell>
                        <TableCell align="center">${test.price}.00</TableCell>
                        <TableCell align="center">
                          <IconButton aria-label="delete" color="error" id={test.id} onClick={handleClickDelete}>
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  <TableRow>
                    <TableCell align="center" colSpan={2}>
                      TOTAL
                    </TableCell>
                    <TableCell align="center">${products.map((e) => e.price || 0).reduce((a, b) => a + b, 0)}.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "40%",
                display: "flex",
                justifyContent: "space-around",
                marginBottom: "2%",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-around", width: "500px", marginTop: "20px" }}>
                <Button variant="contained" size="large" as={Link} to="/search" style={{ textDecoration: "none" }}>
                  SIGUE COMPRANDO
                </Button>
                {token ? (
                  <Button variant="contained" color="success" size="large" onClick={handleSubmit}>
                    CONTINUAR COMPRA
                  </Button>
                ) : null}
              </div>
            </div>

            {token ? null : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "2%",
                  marginBottom: "2%",
                }}
              >
                <h5>Debe iniciar sesión antes de continuar con la compra</h5>
                <Button
                  variant="primary"
                  style={{
                    marginTop: "2%",
                    padding: "1%",
                    paddingRight: "3%",
                    paddingLeft: "3%",
                    width: "30%",
                  }}
                  onClick={() => {
                    console.log(showAlertLogin);
                    setShowAlertLogin(true);
                    setFromCart(true);
                  }}
                >
                  INICIAR SESIÓN
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
      <div>
        <OffCanvasCart show={show} setShow={setShow} setShowAlert={setShowAlert} cart={cart} />
      </div>
      <div style={{ position: "absolute", width: "100%" }}>
        {" "}
        <BillCart showAlert={showAlert} setShowAlert={setShowAlert} products={products} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography variant="h5" fontWeight={700} sx={{ fontFamily: "Raleway", margin: 4 }}>
          Tests que te pueden interesar:
        </Typography>
        <div style={{ width: "1400px", marginBottom: "20px" }}>
          <PopularUI />
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <Modal
          size="lg"
          show={showAlertLogin}
          onHide={() => {
            console.log(showAlertLogin);
            setShowAlertLogin(false);
          }}
          backdrop="static"
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Body>
            <CloseButton onClick={() => setShowAlertLogin(false)} style={{ position: "absolute", top: "15px", right: "15px", zIndex: "1" }}></CloseButton>
            <div style={{ width: "100%" }}>
              <Signup setShowAlertLogin={setShowAlertLogin} fromCart={fromCart} />
            </div>
          </Modal.Body>
        </Modal>
      </div>
      <SelectAppointment openSA={openSA} handleCloseSA={handleCloseSA} handleShow={handleShow} />
    </div>
  );
}
