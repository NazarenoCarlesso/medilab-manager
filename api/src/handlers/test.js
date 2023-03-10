const {
    testAll,
    testDetail,
    testCreate,
    testSearch,
    testByOrders,
    testUpdate,
    testDelete
} = require('../controllers/test')

const testAllHandler = async (req, res) => {
    const tests = req.query.search
        ? await testSearch(req.query.search, req.query.limit)
        : await testAll(req.query.limit)
    res.status(200).json(tests)
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
        res.status(500).json({ msg: error.message })
    }
}

const testDeleteHandler = async (req, res) => {
    try {
        testDelete(req.params.id)
        res.status(200).json({ msg: 'Deleted successfully' })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const testUpdateHandler = async (req, res) => {
    const { name, description, price, time, category, sample } = req.body

    try {
        await testUpdate(req.params.id, name, description,
            price, time, category, sample)
        res.status(201).json({ msg: 'Updated successfully' })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

module.exports = {
    testAllHandler,
    testDetailHandler,
    testByOrdersHandler,
    testCreateHandler,
    testDeleteHandler,
    testUpdateHandler
}