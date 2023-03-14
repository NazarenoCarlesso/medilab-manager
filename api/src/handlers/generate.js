const {
    userGenerator,
    categoryGenerator,
    sampleGenerator,
    testGenerator,
    itemGenerator,
    orderGenerator,
    resultGenerator
} = require('../controllers/generate.js')

const generateAllHandler = async (req, res) => {
    await userGenerator()
    await categoryGenerator()
    await sampleGenerator()
    await testGenerator()
    await itemGenerator();
    await orderGenerator();
    await resultGenerator();
    res.status(200).json({ msg: 'Data Generated Successfully' })
}

const generate1 =async(req,res) => {

    await userGenerator();
    res.status(200).json({ msg: 'User Data Generated Successfully' })

}

const generate2 =async(req,res) => {

    await categoryGenerator()
    await sampleGenerator()
    await testGenerator()
    res.status(200).json({ msg: 'Test & Rel Data Generated Successfully' })

}


const generate3 =async(req,res) => {

    await itemGenerator();
    await orderGenerator();
    res.status(200).json({ msg: 'Item & Order Data Generated Successfully' })

}

const generate4 =async(req,res) => {

    await resultGenerator();
    res.status(200).json({ msg: 'Result Data Generated Successfully' })

}


module.exports = {
    generateAllHandler,
    generate1,
    generate2,
    generate3,
    generate4

}