const {
    categoryAll,
    categoryCreate,
    categoryWithTests,
    categoryDelete,
    categoryUpdate
} = require('../controllers/category')



//////////////////////////////////////////////////////////////

//------------------>ANTES<------------------------

// const categoryAllHandler = async (req, res) => {
//     const categories = await categoryAll()
//     res.status(200).json(categories)
// }

//////////////////////////////////////////////////////////////


const categoryAllHandler = async (req, res) => {
    const { page, limit } = req.query
    const categories = await categoryAll(page, limit)
    res.status(200).json(categories)
}

//////////////////////////////////////////////////////////////


const categoryCreateHandler = async (req, res) => {
    const { name } = req.body

    try {
        await categoryCreate(name)
        res.status(201).json({ msg: 'Created successfully' })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const categoryWithTestsHandler = async (req, res) => {
    const categories = await categoryWithTests()
    res.status(200).json(categories)
}

const categoryDeleteHandler = async (req, res) => {
    try {
        await categoryDelete(req.params.id, req.params.newId)
        res.status(200).json({ msg: 'Deleted successfully' })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const categoryUpdateHandler = async (req, res) => {
    try {
        await categoryUpdate(req.params.id, req.body.name)
        res.status(200).json({ msg: 'Updated successfully' })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

module.exports = {
    categoryAllHandler,
    categoryCreateHandler,
    categoryDeleteHandler,
    categoryUpdateHandler,
    categoryWithTestsHandler
}