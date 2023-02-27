const { categoryAll } = require("../controllers/category")

const categoryAllHandler = async (req, res) => {
    const categories = await categoryAll()
    
    res.status(200).json(categories)
}

module.exports = { categoryAllHandler }