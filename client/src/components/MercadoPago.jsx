
import { useEffect, useState } from "react";
import axios from "axios";

const { REACT_APP_BACK } = process.env;

export default function MercadoPagoPayment() {
  const pago = { name: "hemoglobina", price: 10000, quantity: 1 };
  const [preferenceId, setPreferenceId] = useState(null);

  useEffect(() => {
    axios
      .post(`${REACT_APP_BACK}/mercadopago/preference`, pago)
      .then((order) => {
        setPreferenceId(order.data);
      });
  }, []);

  return (
    <>
      <a href={preferenceId}>pagar</a>
    </>
  );
}
