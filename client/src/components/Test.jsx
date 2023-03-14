import React from "react";
import { useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { addToCart } from "../reducer";

import Hematologia from '../icons/hematologia'
import styles from './Test.module.css';

export default function Test({
  id,
  name,
  sample,
  price,
  setDetailId,
  setShowDetails,
}) {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        width: "250px",
        height: "340px",
        marginTop: "5%",
        marginBottom: "8%",
      }}
    >
      <Card className={`p-2 ${styles.card} ${styles.container}`}>
        <div className="mb-4" style={{ width: "50px", height: "15px" }}>
          <Hematologia></Hematologia>
        </div>
        <Card.Body>
          <Card.Title className={`bg-secondary ${styles.card} ${styles.title}`}>
            <strong>{name}</strong>
          </Card.Title>
          <Card.Title className={`text-primary ${styles.card} ${styles.category}`}>
            Tipo de muestra: <strong>{sample}</strong>
          </Card.Title>
          <hr className="text-info" style={{ marginBottom: "1%" }} />
          <Card.Title className="text-success d-flex pb-3 flex-row-reverse">
          <strong>${price}.00</strong>
          </Card.Title>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "2%",
            }}
          >
            <Button
              id={id}
              variant="outline-primary"
              className={`${styles.btn2} ${styles.boton}`}
              onClick={() => {
                setDetailId(id);
                setShowDetails(true);
              }}

              //   as={Link}
              //   to={`/detail/${id}`}
            >
              Detalles
            </Button>
            <Button variant="outline-info" className={`${styles.btn} ${styles.boton}`} onClick={() => dispatch(addToCart(id))}>
              Agregar
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
