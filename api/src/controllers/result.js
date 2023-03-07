const { QueryTypes } = require('sequelize')
// conexion con Sequelize
const sequelize = require('../db.js')
// const { models } = require('../db.js')
// const { Result } = models

const resultById = async (id, uid) => {
    const results = await sequelize.query(
        `SELECT * FROM "Results" JOIN "Items" ON "ItemId"="Items".id JOIN "Orders" ON "OrderId"="Orders".id JOIN "Patients" ON "PatientId"="Patients".id WHERE "OrderId"=${id} AND "PatientId"=${uid};`,
        { type: QueryTypes.SELECT }
    )

    return results.map(result => ({ item: result.name, value: result.value }))
}

module.exports = { resultById }