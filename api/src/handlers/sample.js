const {
    sampleAll,
    sampleCreate,
    sampleWithTests,
    sampleDelete,
    sampleUpdate
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

const sampleDeleteHandler = async (req, res) => {
    try {
        await sampleDelete(req.params.id, req.params.newId)
        res.status(200).json({ msg: 'Deleted successfully' })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const sampleUpdateHandler = async (req, res) => {
    try {
        await sampleUpdate(req.params.id, req.body.name)
        res.status(200).json({ msg: 'Updated successfully' })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

module.exports = {
    sampleAllHandler,
    sampleCreateHandler,
    sampleDeleteHandler,
    sampleUpdateHandler,
    sampleWithTestsHandler
}