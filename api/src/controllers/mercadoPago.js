const mercadopago = require("mercadopago");
const {models} = require('../db.js')
const { ACCESS_TOKEN, REACT_APP_FRONT } = process.env;
const {Test} = models


mercadopago.configure({
  access_token: ACCESS_TOKEN,
});

const createPayment = async (items) => {
  const tests = await Test.findAll({
    where: {
      id: items
    }
  })

  let preference = {
    items: tests.map((item) => {
      return { title: item.name, unit_price: item.price, quantity: 1 };
    }),

    back_urls: {
      success: `${REACT_APP_FRONT}/successful-payment`,
      failure: `${REACT_APP_FRONT}/declined-payment`,
      pending: "",
    },
    auto_return: "approved",
    binary_mode: true,
  };

  return mercadopago.preferences
    .create(preference)
    .then((response) => response.body.init_point)
    .catch((error) => console.log(error));
};

module.exports = { createPayment };
