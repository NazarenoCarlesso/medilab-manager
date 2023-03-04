/// a revisar controllers sin try catch


const { QueryTypes } = require('sequelize')
// conexion con Sequelize
const { models } = require('../db.js')
const { sequelize } = require('../db.js')
const { Payment } = models


const paymentsById = async (PatientId) => {
    const payments = await sequelize.query(
        `SELECT p.*
        FROM public."Payments" p
        JOIN public."Orders" o ON p.id = o."PaymentId"
        WHERE o."PatientId" = ${PatientId};`,
        { type: QueryTypes.SELECT }
    );
    
    return payments;
}

const paymentsAll = async () => {

    const paymentsTodas = await Payment.findAll();
    return paymentsTodas;
}

module.exports = { paymentsById, paymentsAll }
