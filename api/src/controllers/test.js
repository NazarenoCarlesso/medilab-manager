const { models } = require('../db.js')
const { Test, Sample, test_category } = models

const testAll = async () => {
    const tests = await Test.findAll({
        include: [
            { model: Sample, required: true },
            { model: test_category, required: true }
        ]
    })

    const filter = tests.map(test => ({
        id: test.id,
        name: test.name,
        price: test.price,
        sample: test.Sample.name,
        category: test.test_category.name
    }))

    return filter
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

module.exports = { testAll, testDetail }