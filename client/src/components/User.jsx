import React from "react";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { getOrders } from "../utils/request";
import { loadCategories, loadSamples, loadTests, loadOrders } from "../reducer";

export default function User() {
  // const BACK = process.env.REACT_APP_BACK
  const token = useSelector((state) => state.sessionId?.token);
  const orders = useSelector((state) => state.orders);

  return (
    <div>
      <h1>Hola</h1>

      <Row md={""} className="g-4">
        {orders.map((order) => (
          <Col key={order.id}>
            <div>
              <p>Id: {order.id}</p>
              <p>Name: {order.payment}</p>
              <p>Description: {order.test}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
