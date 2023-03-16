const { QueryTypes } = require('sequelize')
// conexion con Sequelize
const sequelize = require('../db.js')
// models
const { models } = require('../db.js')
const { Sample, Test } = models

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

//////////////////////////////////////////////////////////////

//------------------>ANTES<------------------------

// const sampleAll = async () => {
//     return await Sample.findAll()
// }
//////////////////////////////////////////////////////////////


const sampleAll = async ( page = 0, limit = 10) => {
    return await Sample.findAll({ limit: limit,
        offset: ((page - 1) * limit)})
}

//////////////////////////////////////////////////////////////



const sampleDelete = async (id, newId) => {
    const tests = await Test.findAll({ where: { SampleId: id } })

    tests.map(test => test.SampleId = newId)

    await Promise.all(tests.map(test => test.save()))

    const sample = await Sample.findByPk(id)

    return await sample.destroy()
}

const sampleUpdate = async (id, name) => {
    const sample = await Sample.findByPk(id)

    sample.name = name
    return await sample.save()
}

module.exports = {
    sampleAll,
    sampleCreate,
    sampleDelete,
    sampleUpdate,
    sampleWithTests
}