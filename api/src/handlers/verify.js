const { userVerify } = require('../controllers/verify')

const verifyHandler = async (req, res) => {
    const userVerified = await userVerify(req.params.id)
    res.status(200).json(userVerified)
}

module.exports = { verifyHandler }