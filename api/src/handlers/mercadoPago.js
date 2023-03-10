const { createPayment } = require("../controllers/mercadoPago");

const mercadoPagoHandler = async (req, res) => {
  const { name, price, quantity } = req.body;
  const newPayment = await createPayment(name, price, quantity);
  console.log(newPayment.body);
  try {
    res.status(200).json(newPayment);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = { mercadoPagoHandler };
