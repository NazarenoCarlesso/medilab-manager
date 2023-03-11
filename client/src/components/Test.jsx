import React from "react";
import { useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { addToCart } from "../reducer";
import logo from "../images/logo5.png";
import Hematologia from '../icons/hematologia'
import styles from './Test.module.css';

export default function Test({
  id,
  name,
  category,
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
        marginTop: "3%",
        marginBottom: "5%",
      }}
    >
      <Card className={`p-2 ${styles.card} ${styles.container}`}>
        <Card.Header variant="top" style={{ width: "80px", height: "80px" }}>
          <Hematologia></Hematologia>
        </Card.Header>
        <Card.Body>
          <Card.Title className={`badge bg-secondary ${styles.card} ${styles.title}`}>
            <strong>{name}</strong>
          </Card.Title>
          <Card.Title className={`text-primary ${styles.card} ${styles.category}`}>
            {category}
          </Card.Title>
          <hr className="text-primary" style={{ marginBottom: "4%" }} />
          <Card.Title className="text-primary d-flex pb-4 flex-row-reverse">
            ${price}.00
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
            <Button variant="outline-success" className={`${styles.btn} ${styles.boton}`} onClick={() => dispatch(addToCart(id))}>
              Agregar
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
