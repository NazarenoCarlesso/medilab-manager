const { QueryTypes } = require('sequelize')
// conexion con Sequelize
const sequelize = require('../db.js')
// const { models } = require('../db.js')
// const { Result } = models

const resultById = async (id, uid) => {
    const results = await sequelize.query(
        `SELECT * FROM "Results" JOIN "Items" ON "ItemId"="Items".id JOIN "Orders" ON "OrderId"="Orders".id JOIN "Users" ON "UserId"="Users".id WHERE "OrderId"=${id} AND "UserId"=${uid};`,
        { type: QueryTypes.SELECT }
    )

    return results.map(result => ({ item: result.name, value: result.value }))
}

module.exports = { resultById }