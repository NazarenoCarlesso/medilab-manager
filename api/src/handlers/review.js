const {
    reviewAll,
    reviewCreate,
    reviewDelete,
    reviewUpdate
} = require('../controllers/review')

const reviewAllHandler = async (req, res) => {
    const reviews = await reviewAll()
    res.status(200).json(reviews)
}

const reviewCreateHandler = async (req, res) => {
    try {
        await reviewCreate(req.uid, req.body.content)
        res.status(201).json({ msg: 'Created successfully' })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const reviewDeleteHandler = async (req, res) => {
    try {
        await reviewDelete(req.params.id)
        res.status(200).json({ msg: 'Deleted successfully' })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const reviewUpdateHandler = async (req, res) => {
    try {
        await reviewUpdate(req.uid, req.params.id, req.body.content)
        res.status(200).json({ msg: 'Updated successfully' })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

module.exports = {
    reviewAllHandler,
    reviewCreateHandler,
    reviewDeleteHandler,
    reviewUpdateHandler
}