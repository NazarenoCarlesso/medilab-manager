const { Op } = require("sequelize")
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
        description: test.description,
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

const testSearch = async (search) => {
    const tests = await Test.findAll({
        include: [
            { model: Sample, required: true },
            { model: test_category, required: true }
        ],
        where: {
            [Op.or]: [
                {
                    name: {
                        [Op.iLike]: `%${search}%`
                    }
                },
                {
                    description: {
                        [Op.iLike]: `%${search}%`
                    }
                }
            ]
        }
    })

    const filter = tests.map(test => ({
        id: test.id,
        name: test.name,
        description: test.description,
        price: test.price,
        sample: test.Sample.name,
        category: test.test_category.name
    }))

    return filter
}

module.exports = { testAll, testDetail, testSearch }