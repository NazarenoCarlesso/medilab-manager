const { createPayment } = require("../controllers/mercadoPago");

const mercadoPagoHandler = async (req, res) => {
  const  items  = req.body;
  const newPayment = await createPayment(items);
  try {
    res.status(200).json(newPayment);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = { mercadoPagoHandler };
