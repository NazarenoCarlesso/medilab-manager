const { models } = require('../db.js')
const { Sample } = models

const sampleAll = async () => {
    const samples = await Sample.findAll()

    const filter = samples.map(sample => sample.name)

    return filter
}

module.exports = { sampleAll }