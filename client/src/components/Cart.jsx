import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteOfCartId, deleteOfCart } from "../reducer";

export default function Cart() {
  const dispatch = useDispatch();
  const tests = useSelector((state) => state.tests);
  const cart = useSelector((state) => state.cart);
  const [products, setProducts] = useState([]);
  const [counts, setCounts] = useState({});

  useEffect(() => {
    const newCounts = {};
    for (const element of cart) {
      newCounts[element] = (newCounts[element] || 0) + 1;
    }
    setProducts(tests.filter((e) => cart.includes(e.id)));
    setCounts(newCounts);
  }, [cart, tests]);

  function handleClick(e) {
    const { value, id } = e.target;
    const idInt = parseInt(id);
    if (value === "+") {
      setCounts({
        ...counts,
        [idInt]: (counts[idInt] || 0) + 1,
      });
      dispatch(addToCart(idInt));
    } else {
      if (counts[idInt] === 1) {
        return;
      }
      setCounts({
        ...counts,
        [idInt]: (counts[idInt] || 0) - 1,
      });
      dispatch(deleteOfCartId(idInt));
    }
  }

  function handleClickDelete(e) {
    const { id } = e.target;
    const idInt = parseInt(id);
    dispatch(deleteOfCart(idInt));
  }

  function handleSubmit() {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        const count = counts[product.id] || 0;
        return { ...product, amount: count };
      });
    });
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
              <th style={{ width: "20%" }}>CANTIDAD</th>
              <th style={{ width: "10%" }}>QUITAR</th>
            </tr>
          </thead>
          <tbody>
            {products.map((test, key) => {
              return (
                <tr key={key}>
                  <td>{test.name}</td>
                  <td>${test.price}.00</td>
                  <th>
                    <Button
                      variant="secondary"
                      size="sm"
                      value={"-"}
                      id={test.id}
                      onClick={(e) => handleClick(e)}
                    >
                      -
                    </Button>{" "}
                    {counts[test.id]}{" "}
                    <Button
                      variant="secondary"
                      size="sm"
                      value={"+"}
                      id={test.id}
                      onClick={(e) => handleClick(e)}
                    >
                      +
                    </Button>
                  </th>
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
                $
                {products
                  .map((e) => e.price * (counts[e.id] || 0))
                  .reduce((a, b) => a + b, 0)}
                .00
              </th>
            </tr>
          </tbody>
        </Table>
      </div>

      <Button
        variant="success"
        style={{ padding: "1%", paddingRight: "3%", paddingLeft: "3%" }}
        onClick={handleSubmit}
      >
        Comprar
      </Button>
    </div>
  );
}
