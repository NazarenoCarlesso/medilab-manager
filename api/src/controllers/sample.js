const { QueryTypes } = require('sequelize')
// conexion con Sequelize
const sequelize = require('../db.js')
// models
const { models } = require('../db.js')
const { Sample } = models

const sampleWithTests = async () => {
    const samples = await sequelize.query(
        'SELECT "Samples".id AS "sampleId", "Samples".name FROM "Samples" JOIN "Tests" ON "Samples".id="Tests"."SampleId" GROUP BY "sampleId" ORDER BY "Samples".name ASC;',
        { type: QueryTypes.SELECT }
    )

    return samples.map(sample => sample.name)
}

const sampleCreate = async (name) => {
    return await Sample.create({ name })
}

const sampleAll = async () => {
    return await Sample.findAll()
}

module.exports = {
    sampleAll,
    sampleWithTests,
    sampleCreate
}