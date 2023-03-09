// models
const { models } = require('../db.js')
const { Review, User } = models

const reviewAll = async () => {
    const reviews = await Review.findAll({
        include: {
            model: User, required: true
        }
    })

    return reviews.map(review => ({
        id: review.id,
        content: review.content,
        createdAt: review.createdAt,
        updatedAt: review.updatedAt,
        author: `${review.User.lastName.toUpperCase()}, ${review.User.firstName}`
    }))
}

const reviewCreate = async (uid, content) => {
    return await Review.create({ content, UserId: uid })
}

module.exports = {
    reviewAll,
    reviewCreate
}