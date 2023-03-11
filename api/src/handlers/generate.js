const {
    userGenerator,
    categoryGenerator,
    sampleGenerator,
    testGenerator,
    itemGenerator
} = require('../controllers/generate.js')

const generateAllHandler = async (req, res) => {
    await userGenerator()
    await categoryGenerator()
    await sampleGenerator()
    await testGenerator()
    await itemGenerator()
    res.status(200).json({ msg: 'Data Generated Successfully' })
}

module.exports = {
    generateAllHandler
}