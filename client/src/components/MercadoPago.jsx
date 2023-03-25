import { useState } from "react";
import { useSelector } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
import { Button } from "@mui/material";
import imagenCompraProtegida from "../images/compraprotegida.webp";
import styles from "./OffCanvasCart.module.css";
import axios from "axios";

const { REACT_APP_BACK } = process.env;

export default function MercadoPagoPayment() {
   const [preferenceId, setPreferenceId] = useState(null);
   const cart = useSelector((state) => state.cart);

   const handlerClick = () => {
      axios.post(`${REACT_APP_BACK}/mercadopago/preference`, cart).then((order) => setPreferenceId(order.data));
   };

   return (
      <>
         <Accordion.Item eventKey="1">
            <Accordion.Header onClick={handlerClick}>MercadoPago</Accordion.Header>
            <Accordion.Body style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
               <img className={styles.compraProtegida} src={imagenCompraProtegida} alt={imagenCompraProtegida} style={{ width: "50%" }} />
               <Button variant="contained" href={preferenceId} onClick={handlerClick} style={{ backgroundColor: "#FFF159", color: "black" }}>
                  CONTINUAR COMPRA MERCADOPAGO
               </Button>
            </Accordion.Body>
         </Accordion.Item>
      </>
   );
}
