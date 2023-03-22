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
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setItem } from "../utils/localStorage";

import OffCanvasCart from "./OffCanvasCart";
import BillCart from "./BillCart";
import Signup from "./Signup";
import SelectAppointment from "./SelectAppointment";
import { emptyCart, removeFromCart } from "../reducer";
import PopularUI from "./PopularUI";

const BACK = process.env.REACT_APP_BACK;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxHeight: "600px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "inline-block",
  overflow: "hidden",
  overflowY: "scroll",
};

export default function Cart() {
  const dispatch = useDispatch();
  const location = useLocation()

  // Panel de pagos (agregar)
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(location.state?.showAlert || false);
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
        paddingTop: "6%",
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
          <Button variant="contained" color="success" size="large" as={Link} to="/search" style={{ textDecoration: "none", color: "white" }}>
            BUSCA TU TEST
          </Button>
        </div>
      ) : (
        <div style={{ width: "1300px", position: "relative" }}>
          <Button variant="contained" color="error" onClick={() => dispatch(emptyCart())} style={{ position: "absolute", right: "0px" }}>
            Vaciar carrito
          </Button>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "5%",
            }}
          >
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="a dense table" size="large">
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
                    <TableCell></TableCell>
                    <TableCell align="left">TOTAL</TableCell>
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
                  variant="contained"
                  color="success"
                  size="large"
                  style={{
                    marginTop: "2%",
                    padding: "1%",
                    paddingRight: "3%",
                    paddingLeft: "3%",
                    width: "40%",
                  }}
                  onClick={() => {
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
          Exámenes que te pueden interesar:
        </Typography>
        <div style={{ width: "1300px", marginBottom: "20px" }}>
          <PopularUI />
        </div>
      </div>
      <div>
        <Modal open={showAlertLogin} aria-labelledby="keep-mounted-modal-title" aria-describedby="keep-mounted-modal-description">
          <Box sx={style}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "20px" }}>
              <div>
                <Signup setShowAlertLogin={setShowAlertLogin} fromCart={fromCart} />
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button variant="contained" color="error" onClick={() => setShowAlertLogin(false)} style={{ width: "80px", position: "absolute", top: "10px", right: "10px" }}>
                  CERRAR
                </Button>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
      <SelectAppointment openSA={openSA} handleCloseSA={handleCloseSA} handleShow={handleShow} />
    </div>
  );
}
