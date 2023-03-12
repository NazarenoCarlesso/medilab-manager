const mercadopago = require("mercadopago");
const { ACCESS_TOKEN } = process.env;

mercadopago.configure({
  access_token: ACCESS_TOKEN,
}); 

const createPayment = (name, price, quantity) => {
  let preference = {
    items: [
      {
        title: name,
        unit_price: Number(price),
        quantity: Number(quantity),
      },
    ],
    back_urls: {
      success: "http://localhost:3000",
      failure: "",
      pending: "",
    },
    auto_return: "approved",
    binary_mode: true,
  };

  return mercadopago.preferences
    .create(preference)
    .then((response) => {
      return response.body.init_point;
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = { createPayment };
