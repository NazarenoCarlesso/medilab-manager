const {
    reviewAll,
    reviewCreate
} = require('../controllers/review')

const reviewAllHandler = async (req, res) => {
    const reviews = await reviewAll()
    res.status(200).json(reviews)
}

const reviewCreateHandler = async (req, res) => {
    const { content } = req.body

    try {
        await reviewCreate(req.uid, content)
        res.status(201).json({ msg: 'Created successfully' })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

module.exports = {
    reviewAllHandler,
    reviewCreateHandler
}