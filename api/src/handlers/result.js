const { resultById } = require('../controllers/result')

const resultHandler = async (req, res) => {
    const results = await resultById(req.params.id, req.uid)
    res.status(200).json(results)
}

module.exports = { resultHandler }