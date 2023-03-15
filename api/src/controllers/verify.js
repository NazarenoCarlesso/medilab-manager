const { models } = require('../db.js')
const { User } = models

const userVerify = async (id) => {
    const userVerified = await User.update(
        {deleted: false },
        { where: {id}}
    )

    return userVerified
}

module.exports = { userVerify }