/// a revisar controllers sin try catch


const { QueryTypes } = require('sequelize')
// conexion con Sequelize
const { models } = require('../db.js')
const { sequelize } = require('../db.js')
const { Payment, Order } = models


const paymentsById = async (PatientId) => {

    const payments = await Payment.findAll({
        include: [{
          model: Order,
          where: { PatientId }
        }]
      });
      
    
    return payments;
}

const paymentsAll = async () => {

    const paymentsTodas = await Payment.findAll();
    return paymentsTodas;
}

module.exports = { paymentsById, paymentsAll }
