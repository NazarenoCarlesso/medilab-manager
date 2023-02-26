const { testAll, testDetail } = require("../controllers/test")

const testAllHandler = async (req, res) => {
    const tests = await testAll()

    res.status(200).json(tests)
}

const testDetailHandler = async (req, res) => {
    const { id } = req.params

    const test = await testDetail(id)

    res.status(200).json(test)
}

module.exports = { testAllHandler, testDetailHandler }