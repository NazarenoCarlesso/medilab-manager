const { models } = require('../db.js')
const { Order, Patient, Payment, Test } = models

const patientId = 801; // id del paciente existente en la tabla patients
const testIds = [1, 2, 3, 4]; // ids de prueba de la tabla tests
const amount = 100;
const paymentMethod = 'tarjeta de crédito';

async function createOrder(test, patient) {
    const order = await Order.create({
        TestId: test.id,
        PatientId: patient.id
    });
    
    const payment = await Payment.create({
        amount: amount,
        paymentMethod: paymentMethod
    });
    
    await order.setPayment(payment);
}

Patient.findByPk(patientId).then((patient) => {
    testIds.forEach(async (testId) => {
        const test = await Test.findByPk(testId);
        await createOrder(test, patient);
    });
}).catch((error) => {
    console.log('Error al generar datos de prueba', error);
});


// // Crear una nueva orden para cada testId
// const orders = testIds.map((testId) => {
//   return {
//     PatientId: patientId,
//     TestId: testId,
//     Payment: {
//       amount: 100, // cantidad en dólares
//       paymentMethod: 'tarjeta de crédito'
//     }
//   }
// });

// // Crear todas las ordenes y sus pagos asociados
// Order.bulkCreate(orders, {
//   include: [{
//     model: Payment
//   }]
// }).then(() => {
//   console.log('Datos de prueba generados exitosamente');
// }).catch((error) => {
//   console.log('Error al generar datos de prueba', error);
// });
