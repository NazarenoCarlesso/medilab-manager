const { testAll, testDetail, testSearch } = require("../controllers/test")

const testAllHandler = async (req, res) => {
    const tests = req.query.search ? await testSearch(search) : await testAll()
    res.status(200).json(tests)
}

const testDetailHandler = async (req, res) => {
    const test = await testDetail(req.params.id)
    res.status(200).json(test)
}

module.exports = { testAllHandler, testDetailHandler }