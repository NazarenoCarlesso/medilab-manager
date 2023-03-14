import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import axios from "axios";

const { REACT_APP_BACK } = process.env;

export default function MercadoPagoPayment() {

  const [preferenceId, setPreferenceId] = useState(null);
  const cart = useSelector((state) => state.cart)

  useEffect(() => {
    axios
      .post(`${REACT_APP_BACK}/mercadopago/preference`, cart)
      .then((order) => {
        setPreferenceId(order.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Accordion.Item eventKey="1">
        <Accordion.Header>MercadoPago</Accordion.Header>
        <Accordion.Body>
          <Button href={preferenceId}>CONTINUAR COMPRA MERCADOPAGO</Button>

        </Accordion.Body>
      </Accordion.Item>
    </>
  );
}
