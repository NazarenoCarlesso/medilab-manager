const { QueryTypes } = require('sequelize')
// conexion con Sequelize
const sequelize = require('../db.js')
// const { models } = require('../db.js')
// const { Sample } = models

const sampleAll = async () => {
    // const samples = await Sample.findAll()
    const samples = await sequelize.query(
        'SELECT "Samples".id AS "sampleId", "Samples".name FROM "Samples" JOIN "Tests" ON "Samples".id="Tests"."SampleId" GROUP BY "sampleId" ORDER BY "Samples".name ASC;',
        { type: QueryTypes.SELECT }
    )

    const filter = samples.map(sample => sample.name)

    return filter
}

module.exports = { sampleAll }