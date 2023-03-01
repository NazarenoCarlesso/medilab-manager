const { testAll, testDetail, testSearch } = require("../controllers/test")

const testAllHandler = async (req, res) => {
    const { search } = req.query

    let tests = await testAll()

    if (search) {
        tests = await testSearch(search)
    }

    res.status(200).json(tests)
}

const testDetailHandler = async (req, res) => {
    const { id } = req.params

    const test = await testDetail(id)

    res.status(200).json(test)
}

module.exports = { testAllHandler, testDetailHandler }