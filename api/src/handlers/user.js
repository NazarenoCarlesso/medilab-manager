const {
    userAll,
    userLogIn,
    userSignUp,
    userGoogle,
    userDetail,
    userDelete,
    userWithRoles,
    userChangePassword,
    userGenerator,
    userPhotoUpload,
} = require('../controllers/user')

const userAllHandler = async (req, res) => {
    const users = await userAll()

    res.status(200).json(users)
}

const userDetailHandler = async (req, res) => {
    const users = await userDetail(req.uid)

    res.status(200).json(users)
}

const userWithRolesHandler = async (req, res) => {
    const users = await userWithRoles()

    res.status(200).json(users)
}

const userLogInHandler = async (req, res) => {
    const { username, password } = req.body

    try {
        const { token, name, avatar, role } = await userLogIn(username, password)
        res.header('Access-Control-Expose-Headers', 'token')
        res.status(200).header('token', token).json({ name, avatar, role })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const userChangePasswordHandler = async (req, res) => {
    try {
        await userChangePassword(req.uid, req.body.password)

        res.status(201).json({ msg: 'Password modified successfully' })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const userSignUpHandler = async (req, res) => {
    const { username, password, email, firstName, lastName,
        dni, number, sex, height, civilState } = req.body

    try {
        await userSignUp(username,
            password, email, firstName, lastName, dni, number,
            sex, height, civilState)
        res.status(201).json({ msg: 'Created successfully' })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const userGoogleHandler = async (req, res) => {
    const googleToken = req.header('token')

    try {
        const { token, name, avatar, role } = await userGoogle(googleToken)
        res.header('Access-Control-Expose-Headers', 'token')
        res.status(200).header('token', token).json({ name, avatar, role })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const userDeleteHandler = async (req, res) => {
    try {
        await userDelete(req.uid)
        res.status(200).json({ msg: 'Deleted successfully' })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const userGeneratorHandler = async (req, res) => {
    try {
        await userGenerator()
        res.status(201).json({ msg: 'Created successfully' })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const userPhotoUploadHandler = async (req, res) => {
    try {
        await userPhotoUpload(req.uid, req.files.archivo)

        res.status(201).json({ msg: 'Created successfully' })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

module.exports = {
    userAllHandler,
    userLogInHandler,
    userSignUpHandler,
    userGoogleHandler,
    userDetailHandler,
    userDeleteHandler,
    userWithRolesHandler,
    userChangePasswordHandler,
    userPhotoUploadHandler,
    userGeneratorHandler
}
