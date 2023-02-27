const { models } = require('../db.js')
const { test_category } = models

const categoryAll = async () => {
    const categories = await test_category.findAll()

    const filter = categories.map(category => category.name)

    return filter
}

module.exports = { categoryAll }