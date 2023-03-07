const {
    categoryAll,
    categoryCreate,
    categoryWithTests
} = require('../controllers/category')

const categoryAllHandler = async (req, res) => {
    const categories = await categoryAll()
    res.status(200).json(categories)
}

const categoryCreateHandler = async (req, res) => {
    const { name } = req.body

    try {
        await categoryCreate(name)
        res.status(201).json({ msg: 'Created successfully' })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const categoryWithTestsHandler = async (req, res) => {
    const categories = await categoryWithTests()
    res.status(200).json(categories)
}

module.exports = {
    categoryAllHandler,
    categoryCreateHandler,
    categoryWithTestsHandler
}