const { userVerify } = require('../controllers/verify')

const verifyHandler = async (req, res) => {
    const userVerified = await userVerify(req.params.id)

    const redirectUrl = req.query.redirect || '/';
    res.redirect(redirectUrl);
}

module.exports = { verifyHandler }