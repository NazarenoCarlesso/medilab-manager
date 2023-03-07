const {
    sampleAll,
    sampleCreate,
    sampleWithTests
} = require('../controllers/sample')

const sampleAllHandler = async (req, res) => {
    const samples = await sampleAll()
    res.status(200).json(samples)
}

const sampleCreateHandler = async (req, res) => {
    const { name } = req.body

    try {
        await sampleCreate(name)
        res.status(201).json({ msg: 'Created successfully' })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const sampleWithTestsHandler = async (req, res) => {
    const samples = await sampleWithTests()
    res.status(200).json(samples)
}

module.exports = {
    sampleAllHandler,
    sampleCreateHandler,
    sampleWithTestsHandler
}