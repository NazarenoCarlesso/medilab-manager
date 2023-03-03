const { resultById } = require("../controllers/result")

const resultHandler = async (req, res) => {
    const { id } = req.params

    const results = await resultById(id, req.uid)

    res.status(200).json(results)
}

module.exports = { resultHandler }