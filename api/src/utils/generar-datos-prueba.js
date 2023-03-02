const { models } = require('../db.js')
const { Order, Patient, Payment, Test } = models

const patientId = 2; // id del paciente existente en la tabla patients
const testIds = [5, 6, 7, 8]; // ids de prueba de la tabla tests
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

