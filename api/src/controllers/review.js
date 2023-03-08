// models
const { models } = require('../db.js')
const { Review, Patient } = models

const reviewAll = async () => {
    const reviews = await Review.findAll({
        include: {
            model: Patient, required: true
        }
    })

    return reviews.map(review => ({
        id: review.id,
        content: review.content,
        createdAt: review.createdAt,
        updatedAt: review.updatedAt,
        author: `${review.Patient.lastName.toUpperCase()}, ${review.Patient.firstName}`
    }))
}

const reviewCreate = async (uid, content) => {
    return await Review.create({ content, PatientId: uid })
}

module.exports = {
    reviewAll,
    reviewCreate
}