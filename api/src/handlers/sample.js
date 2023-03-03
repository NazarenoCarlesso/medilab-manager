const { sampleAll } = require('../controllers/sample')

const sampleAllHandler = async (req, res) => {
    const samples = await sampleAll()
    res.status(200).json(samples)
}

module.exports = { sampleAllHandler }