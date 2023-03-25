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
import emptyCartImage from "../images/emptycart.webp";
import styles from "./Cart.module.css";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setItem } from "../utils/localStorage";

import OffCanvasCart from "./OffCanvasCart";
import BillCart from "./BillCart";
import Signup from "./Signup";
import SelectAppointment from "./SelectAppointment";
import { emptyCart, removeFromCart, addToCart } from "../reducer";
import PopularUI from "./PopularUI";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";

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

export function DetailUI({ id, addToCart, removeFromCart }) {
   // get cart from store
   const cart = useSelector((state) => state.cart);
   // test state
   const [test, setTest] = useState({});
   // get test detail
   useEffect(() => {
      fetch(`${BACK}/tests/${id}`)
         .then((response) => response.json())
         .then((data) => setTest(data));
   }, [id]);
   // render component
   return (
      <div
         className="TestUI"
         style={{ padding: "0px 20px 20px 0px", height: "inherit", width: "100%", color: "black", backgroundColor: "white", borderRadius: "10px" }}
      >
         <div className="content">
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
               <div className="title">{test.name}</div>
               <div className="price">${test.price}.00</div>
            </Grid>
            <div className="description" style={{ fontFamily: "Raleway" }}>
               <p>{test.description}</p>
            </div>
         </div>
         {cart.includes(id) ? (
            <Button color="secondary" onClick={() => removeFromCart(id)} sx={{ minWidth: 200 }}>
               Quitar del carrito
            </Button>
         ) : (
            <Button onClick={() => addToCart(id)} sx={{ minWidth: 200, border: "1px solid #5080FD" }}>
               Agregar al carrito
            </Button>
         )}
      </div>
   );
}

const BACK = process.env.REACT_APP_BACK;

export default function Cart() {
   const dispatch = useDispatch();
   const location = useLocation();

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

   const [open, setOpen] = useState(false);
   const handleOpen = (e) => {
      setIdDetails(e.target.id);
      setOpen(true);
   };
   const handleClose = () => setOpen(false);
   const [idDetails, setIdDetails] = useState("");

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
      <Container maxWidth={"xl"}>
         <div
            style={{
               margin: "auto",
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
               justifyContent: "center",
               position: "relative",
               textAlign: "center",
            }}
         >
            {cart.length === 0 ? (
               <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <img src={emptyCartImage} alt={emptyCartImage} style={{ width: "40%" }} />
                  <Typography variant="h4" fontWeight={700} sx={{ fontFamily: "Raleway" }}>
                     Tu carrito de compra está vacío
                  </Typography>
                  <Typography fontWeight={100} sx={{ fontFamily: "Raleway", margin: "20px", fontSize: "18px" }}>
                     Busca entre todos nuestros test el que necesites
                  </Typography>
                  <Button
                     variant="contained"
                     color="success"
                     size="large"
                     as={Link}
                     to="/search"
                     style={{ textDecoration: "none", color: "white", fontFamily: "Raleway" }}
                  >
                     BUSCA TU TEST
                  </Button>
               </div>
            ) : (
               <div style={{ width: "90%", position: "relative" }}>
                  <Button
                     variant="contained"
                     color="error"
                     onClick={() => dispatch(emptyCart())}
                     style={{ position: "absolute", fontFamily: "Raleway", right: "0px" }}
                  >
                     Vaciar carrito
                  </Button>
                  <Box
                     style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingTop: "50px",
                     }}
                  >
                     <TableContainer component={Paper}>
                        <Table aria-label="a dense table" size="large">
                           <TableHead>
                              <TableRow>
                                 <TableCell width={"10%"} align="center">
                                    <Typography variant="h6" fontWeight={700} sx={{ fontFamily: "Raleway" }}>
                                       ID
                                    </Typography>
                                 </TableCell>
                                 <TableCell width={"70%"} align="center">
                                    <Typography variant="h6" fontWeight={700} sx={{ fontFamily: "Raleway" }}>
                                       PRODUCTO
                                    </Typography>
                                 </TableCell>
                                 <TableCell width={"10%"} align="center">
                                    <Typography variant="h6" fontWeight={700} sx={{ fontFamily: "Raleway" }}>
                                       PRECIO
                                    </Typography>
                                 </TableCell>
                                 <TableCell width={"10%"} align="center">
                                    <Typography variant="h6" fontWeight={700} sx={{ fontFamily: "Raleway" }}>
                                       QUITAR
                                    </Typography>
                                 </TableCell>
                              </TableRow>
                           </TableHead>
                           <TableBody>
                              {products.map((test, key) => {
                                 return (
                                    <TableRow key={key} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                       <TableCell component="th" scope="row" align="center">
                                          <Typography variant="h6" fontWeight={700} sx={{ fontFamily: "Raleway" }}>
                                             {key + 1}
                                          </Typography>
                                       </TableCell>
                                       <TableCell align="left">
                                          <Typography
                                             variant="h5"
                                             fontWeight={500}
                                             id={test.id}
                                             onClick={(e) => handleOpen(e)}
                                             sx={{
                                                fontFamily: "Raleway",
                                                cursor: "pointer",
                                                color: "#317D98",
                                             }}
                                          >
                                             {test.name}
                                          </Typography>
                                          <Typography
                                             className={styles.typoDescription}
                                             fontWeight={100}
                                             sx={{
                                                fontFamily: "Raleway",
                                             }}
                                          >
                                             {test.description}
                                          </Typography>
                                       </TableCell>
                                       <TableCell align="center">
                                          <Typography variant="h6" fontWeight={500} sx={{ fontFamily: "Raleway" }}>
                                             ${test.price}.00
                                          </Typography>
                                       </TableCell>
                                       <TableCell align="center">
                                          <IconButton
                                             className={styles.DeleteIcon}
                                             aria-label="delete"
                                             color="error"
                                             id={test.id}
                                             onClick={handleClickDelete}
                                          >
                                             <DeleteIcon />
                                          </IconButton>
                                       </TableCell>
                                    </TableRow>
                                 );
                              })}
                              <TableRow>
                                 <TableCell></TableCell>
                                 <TableCell align="left">
                                    <Typography variant="h6" fontWeight={700} sx={{ fontFamily: "Raleway" }}>
                                       TOTAL
                                    </Typography>
                                 </TableCell>
                                 <TableCell align="center">
                                    <Typography variant="h6" fontWeight={700} sx={{ fontFamily: "Raleway" }}>
                                       ${products.map((e) => e.price || 0).reduce((a, b) => a + b, 0)}.00
                                    </Typography>
                                 </TableCell>
                              </TableRow>
                           </TableBody>
                        </Table>
                     </TableContainer>
                  </Box>
                  <Box
                     style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                     }}
                  >
                     <Box className={styles.buttonsSigueContinua}>
                        <Button
                           className={styles.buttonSigueComprando}
                           variant="contained"
                           color="primary"
                           size="large"
                           as={Link}
                           to="/search"
                           style={{ fontFamily: "Raleway" }}
                        >
                           SIGUE COMPRANDO
                        </Button>
                        {token ? (
                           <Button
                              className={styles.buttonContinuarCompra}
                              variant="contained"
                              color="success"
                              size="large"
                              onClick={handleSubmit}
                              style={{ fontFamily: "Raleway" }}
                           >
                              CONTINUAR COMPRA
                           </Button>
                        ) : null}
                     </Box>

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
                           <Typography variant="h6" fontWeight={700} sx={{ fontFamily: "Raleway" }}>
                              Debe iniciar sesión antes de continuar con la compra
                           </Typography>
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
                  </Box>
               </div>
            )}
            <div>
               <OffCanvasCart show={show} setShow={setShow} setShowAlert={setShowAlert} cart={cart} />
            </div>
            <div style={{ position: "absolute", width: "100%" }}>
               <BillCart showAlert={showAlert} setShowAlert={setShowAlert} products={products} />
            </div>
            {/* Exámenes populares */}
            <Box style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
               <PopularUI />
            </Box>
            {/* Modal Login */}
            <Modal open={showAlertLogin} aria-labelledby="keep-mounted-modal-title" aria-describedby="keep-mounted-modal-description">
               <Box sx={style}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "20px" }}>
                     <div>
                        <Signup setShowAlertLogin={setShowAlertLogin} fromCart={fromCart} />
                     </div>
                     <div style={{ display: "flex", justifyContent: "flex-end" }}>
                        <Button
                           variant="contained"
                           color="error"
                           onClick={() => setShowAlertLogin(false)}
                           style={{ width: "80px", position: "absolute", top: "10px", right: "10px" }}
                        >
                           CERRAR
                        </Button>
                     </div>
                  </div>
               </Box>
            </Modal>
         </div>
         <SelectAppointment openSA={openSA} handleCloseSA={handleCloseSA} handleShow={handleShow} />

         {/* Modal detalles */}
         <Modal open={open} onClose={handleClose}>
            <Paper
               sx={{
                  position: "absolute",
                  top: "350px",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  maxWidth: "800px",
                  width: "60%",
                  bgcolor: "transparent",
                  boxShadow: "none",
               }}
            >
               {open ? (
                  <DetailUI
                     id={idDetails}
                     addToCart={(idDetails) => dispatch(addToCart(idDetails))}
                     removeFromCart={(idDetails) => dispatch(removeFromCart(idDetails))}
                  />
               ) : null}
            </Paper>
         </Modal>
      </Container>
   );
}
