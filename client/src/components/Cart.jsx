import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteOfCart } from "../reducer";
import { setItem } from "../utils/localStorage";

export default function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const tests = useSelector((state) => state.tests);
  const cart = useSelector((state) => state.cart);
  const sessionId = useSelector((state) => state.sessionId);
  const [products, setProducts] = useState(
    tests.filter((e) => cart.includes(e.id))
  );

  useEffect(() => {
    setProducts(tests.filter((e) => cart.includes(e.id)));
    setItem("cart", cart);
  }, [cart, tests]);

  function handleClickDelete(e) {
    const { id } = e.target;
    const idInt = parseInt(id);
    dispatch(deleteOfCart(idInt));
  }

  function handleSubmit() {
    console.log(products);
  }

  return (
    <div
      style={{
        margin: "auto",
        paddingTop: "2%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "80%",
        position: "relative",
      }}
    >
      <hr />
      <Button
        variant="secondary"
        value={"deleteAll"}
        onClick={(e) => dispatch(deleteOfCart(e.target.value))}
        style={{ position: "absolute", right: "0px" }}
      >
        Vaciar carrito
      </Button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          paddingTop: "2%",
        }}
      >
        <Table striped>
          <thead>
            <tr>
              <th style={{ width: "50%" }}>PRODUCTO</th>
              <th style={{ width: "20%" }}>PRECIO</th>
              <th style={{ width: "10%" }}>QUITAR</th>
            </tr>
          </thead>
          <tbody>
            {products.map((test, key) => {
              return (
                <tr key={key}>
                  <td>{test.name}</td>
                  <td>${test.price}.00</td>
                  <td>
                    <Button
                      variant="danger"
                      id={test.id}
                      onClick={(e) => handleClickDelete(e)}
                    >
                      X
                    </Button>
                  </td>
                </tr>
              );
            })}
            <tr>
              <th>TOTAL: </th>
              <th>
                ${products.map((e) => e.price || 0).reduce((a, b) => a + b, 0)}
                .00
              </th>
            </tr>
          </tbody>
        </Table>
      </div>
      {sessionId ? (
        <Button
          variant="success"
          style={{ padding: "1%", paddingRight: "3%", paddingLeft: "3%" }}
          onClick={handleSubmit}
        >
          Comprar
        </Button>
      ) : (
        <div>
          <h4>Debe iniciar sesión</h4>
          <Button
            variant="success"
            style={{ padding: "1%", paddingRight: "3%", paddingLeft: "3%" }}
            onClick={() => navigate("/signup")}
          >
            Iniciar sesión
          </Button>
        </div>
      )}
    </div>
  );
}
