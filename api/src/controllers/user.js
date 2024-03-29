const bcrypt = require('bcrypt')
const { Op } = require('sequelize')

// models
const { models } = require('../db.js')
const { User } = models

// helpers
const generateJWT = require('../helpers/generateJWT.js')
const { googleVerify } = require('../helpers/verifyGoogle.js')
const { sendVerificationEmail } = require('../helpers/sendVerificationEmail.js');

// utils
const { uploadPhotoCloudinary, destroyPhotoCloudinary } = require('./upload.js')

const userAll = async () => {
    let users = await User.findAll({ where: { deleted: false } })

    return users.map(patient => ({
        id: patient.id,
        firstName: patient.firstName,
        lastName: patient.lastName,
        sex: patient.sex,
    }))
}

const userDetail = async (uid) => {
    let user = await User.findByPk(uid, {
        attributes: { exclude: ['password', 'deleted'] }
    })

    return (user)
}

const userWithRoles = async () => {
    let users = await User.findAll({
        where: {
            role: { [Op.ne]: null }
        }
    })

    return users.map(patient => ({
        id: patient.id,
        firstName: patient.firstName,
        lastName: patient.lastName,
        sex: patient.sex,
    }))
}

const userLogIn = async (username, password) => {
    const user = await User.findOne({ where: { username } })
    // Comparar la contraseña proporcionada con la contraseña
    // almacenada en la base de datos
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) throw new Error('Usuario y Contraseña no coinciden')

    return ({
        token: await generateJWT(user.id),
        name: `${user.lastName.toUpperCase()}, ${user.firstName}`,
        avatar: user.photo,
        role: user.role
    })
}

const userChangePassword = async (uid, password) => {
    const user = await User.findByPk(uid)

    user.password = await bcrypt.hash(password, 10)

    return user.save()
}

const userSignUp = async (username, password, email, firstName, lastName, dni, number, sex, height, civilState) => {
    // Generar una contraseña encriptada con bcrypt
    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({
        username, email, password: hash, firstName,
        lastName, dni, phone: number, sex, height, civil: civilState, deleted: true
    });

    await sendVerificationEmail(user.email, user.id); // pide verificaccion del email para pasar deleted a true...

    return user;
}

const userGoogle = async (token) => {
    const { firstName, lastName, email, picture } = await googleVerify(token)

    let user = await User.findOne({ where: { email } })

    if (!user) {
        user = await User.create({
            username: email.slice(0, 24), email, password: email,
            firstName, lastName, photo: picture
        })
    }

    if (user.deleted) throw new Error('Paciente eliminado')

    return ({
        token: await generateJWT(user.id),
        name: `${user.lastName.toUpperCase()}, ${user.firstName}`,
        avatar: user.photo ? user.photo : picture,
        role: user.role
    })
}

const userDelete = async (uid) => {
    const user = await User.findByPk(uid)
    user.deleted = true
    return await user.save()
}

const userPhotoUpload = async (uid, file) => {
    const user = await User.findByPk(uid)

    if (user.photo && user.photo.includes('cloudinary')) {
        const array = user.photo.split('/')
        const nombre = array[array.length - 1]
        const [public_id] = nombre.split('.')
        destroyPhotoCloudinary(public_id)
    }

    user.photo = await uploadPhotoCloudinary(file)

    return await user.save()
}

module.exports = {
    userAll,
    userLogIn,
    userSignUp,
    userGoogle,
    userDetail,
    userDelete,
    userWithRoles,
    userChangePassword,
    userPhotoUpload
}