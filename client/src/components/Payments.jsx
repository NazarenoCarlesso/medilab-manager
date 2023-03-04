import React from "react";

export default function Payments() {
  const data = [
    {
      item: "Sodio",
      value: 54,
    },
    {
      item: "Cloro",
      value: 51,
    },
    {
      item: "Potasio",
      value: 39,
    },
    {
      item: "Ph",
      value: 6,
    },
  ];

  console.log(data);
  return (
    <div>
      <h1>Hola soy payments</h1>
    </div>
  );
}
