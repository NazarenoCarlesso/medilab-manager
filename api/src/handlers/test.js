const {
    testAll,
    testDetail,
    testCreate,
    testSearch,
    testByOrders,
    testEdit
} = require('../controllers/test')

const testAllHandler = async (req, res) => {
    const tests = req.query.search
        ? await testSearch(req.query.search, req.query.limit)
        : await testAll(req.query.limit)
    res.status(200).json(tests)
}

const testEditHandler = async (req, res) => {
    const { id } = req.params
    const { name, description, price, time } = req.body

    try {
        await testEdit(id, name, description, price, time)
        res.status(201).json({ msg: 'Modified successfully' })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const testDetailHandler = async (req, res) => {
    const test = await testDetail(req.params.id)
    res.status(200).json(test)
}

const testByOrdersHandler = async (req, res) => {
    const tests = await testByOrders(req.query.limit)
    res.status(200).json(tests)
}

const testCreateHandler = async (req, res) => {
    const { name, description, price, time, category, sample } = req.body

    try {
        await testCreate(name, description, price, time, category, sample)
        res.status(201).json({ msg: 'Created successfully' })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

module.exports = {
    testAllHandler,
    testDetailHandler,
    testByOrdersHandler,
    testCreateHandler,
    testEditHandler
}