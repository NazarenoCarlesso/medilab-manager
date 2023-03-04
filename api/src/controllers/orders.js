const { models } = require("../db.js");
const { Order, Patient, Payment, Test } = models;

const orders = async (patientId) => {
  try {
    let orders;
    if (patientId) {
      const patient = await Patient.findByPk(patientId);
      if (!patient) {
        console.log("Paciente no encontrado");
        return;
      }

      const tests = await patient.getTests();
      const testIds = tests.map((test) => test.id);

      orders = await Order.findAll({
        where: {
          TestId: testIds,
        },
        // include: {
        //     model: Payment,
        //     required: true
        // }
      });
    } else {
      orders = await Order.findAll();
    }
    return orders;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const createOrder = async (uid, tests) => {
  //Genera un Payment, quizás debería venir el costo y tipo desde la variable "tests" (body)
  const newPayment = await Payment.create(/*{
    amount:
    paymentMethod:
  } */);

  const bulkOfOrders = tests.map((test) => {
    return {
      PatientId: uid,
      TestId: test,
      PaymentId: newPayment.dataValues.id,
    };
  });

  console.log(bulkOfOrders)
  return await Order.bulkCreate(bulkOfOrders); //datos correspondientes con la orden recién generada
};

module.exports = { orders, createOrder };
