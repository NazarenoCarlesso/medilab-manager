const { Op, QueryTypes } = require('sequelize')
// conexion con Sequelize
const sequelize = require('../db.js')
// models
const { models } = require('../db.js')
const { Test, Sample, test_category } = models

const testAll = async (limit) => {
    const tests = await Test.findAll({
        include: [
            { model: Sample, required: true },
            { model: test_category, required: true }
        ]
    })

    return tests.map(test => ({
        id: test.id,
        name: test.name,
        description: test.description,
        price: test.price,
        sample: test.Sample.name,
        category: test.test_category.name
    })).slice(0, limit)
}

const testDetail = async (pk) => {
    const test = await Test.findByPk(pk)
    const sample = await test.getSample()
    const category = await test.getTest_category()
    const { id, name, description, price, time } = test

    return {
        id, name, description, price, time,
        sample: sample.name,
        category: category.name
    }
}

const testSearch = async (search, page = 0, limit = 5) => {
    const tests = await Test.findAndCountAll({
        include: [
            { model: Sample, required: true },
            { model: test_category, required: true }
        ],
        where: {
            [Op.or]: [{
                name: { [Op.iLike]: `%${search}%` }
            }, {
                description: { [Op.iLike]: `%${search}%` }
            }]
        },
        limit: limit,
        offset: ((page - 1) * limit)
    })

    const categories = []
    const samples = []

    tests.rows = tests.rows.map(test => {
        categories.includes(test.test_category.name)
            ? null
            : categories.push(test.test_category.name)

        samples.includes(test.Sample.name)
            ? null
            : categories.push(test.Sample.name)

        return ({
            id: test.id,
            name: test.name,
            description: test.description,
            price: test.price,
            sample: test.Sample.name,
            category: test.test_category.name
        })
    })

    return { ...tests, categories, samples }
}

const testByOrders = async (limit) => {
    const tests = await sequelize.query(
        'SELECT "Tests".id AS "testId", name, description, price FROM "Tests" LEFT JOIN "Orders" ON "Tests".id="Orders"."TestId" GROUP BY "testId" ORDER BY COUNT("Tests".id) DESC;',
        { type: QueryTypes.SELECT }
    )

    return tests.map(test => ({
        id: test.testId,
        name: test.name,
        description: test.description,
        price: test.price,
        // sample: test.Sample.name,
        // category: test.test_category.name
    })).slice(0, limit)
}

const testCreate = async (name, description, price, time, category, sample) => {
    return await Test.create({
        name: name,
        description: description,
        price: price,
        time: time,
        testCategoryId: category,
        SampleId: sample
    })
}

const testDelete = async (id) => {
    const test = await Test.findByPk(id)

    return await test.destroy()
}

const testUpdate = async (id, name, description, price, time, category, sample) => {
    const test = await Test.findByPk(id)

    test.name = name
    test.description = description
    test.price = price
    test.time = time
    test.testCategoryId = category
    test.SampleId = sample

    return await test.save()
}

module.exports = {
    testAll,
    testCreate,
    testDetail,
    testSearch,
    testDelete,
    testUpdate,
    testByOrders
}