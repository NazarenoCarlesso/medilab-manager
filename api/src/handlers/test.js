const {
    testAll,
    testDetail,
    testSearch,
    testByOrders
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

module.exports = {
    testAllHandler,
    testDetailHandler,
    testByOrdersHandler
}