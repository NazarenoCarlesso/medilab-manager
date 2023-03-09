const bcrypt = require('bcrypt')
const { Op } = require('sequelize')

// models
const { models } = require('../db.js')
const { User } = models

// helpers
const generateJWT = require('../helpers/generateJWT.js')
const { googleVerify } = require('../helpers/verifyGoogle.js')
const uploadFile = require('../helpers/uploadFile')
const { userPhotoPath } = require('../helpers/generatePath.js')

// utils
const { toFirstName, toLastName, toUnique, toPhoto } = require('../utils/index.js')
const { uploadPhotoCloudinary } = require('./upload.js')

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
        name: `${user.lastName.toUpperCase()}, ${user.firstName}`
    })
}

const userChangePassword = async (uid, password) => {
    const user = await User.findByPk(uid)

    user.password = await bcrypt.hash(password, 10)

    return user.save()
}

const userSignUp = async (username, password, email, firstName, lastName, dni, number, sex, height, civilState) => {
    // Generar una contraseña encriptada con bcrypt
    const hash = await bcrypt.hash(password, 10)

    return await User.create({
        username, email, password: hash, firstName,
        lastName, dni, number, sex, height, civilState
    })
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
        name: `${user.lastName.toUpperCase()}, ${user.firstName}`
    })
}

const userDelete = async (uid) => {
    const user = await User.findByPk(uid)
    user.deleted = true
    return await user.save()
}

const userGenerator = async () => {
    const users = await fetch(`${process.env.VITAL_API}/apirest/pacientes`)
        .then(response => response.json())

    const password = await bcrypt.hash('password', 10)

    await Promise.all(users.map(user => User.create({
        id: user.id,
        firstName: toFirstName(user.nombres),
        lastName: toLastName(user.apePaterno),
        dni: user.dni,
        height: null,
        sex: user.sexo,
        civil: null,
        phone: user.telefono,
        photo: toPhoto(user.sexo),
        email: toUnique(user.apePaterno, user.apeMaterno, user.id) + '@gmail.com',
        username: toUnique(user.apePaterno, user.apeMaterno, user.id),
        password: password
    })))

    await User.create({
        id: 999, firstName: 'admin', lastName: 'admin',
        username: 'admin', password: await bcrypt.hash('admin', 10),
        email: 'admin@admin.com', role: 'ADMIN'
    })
}

const userPhotoUpload = async (uid, file) => {
    const user = await User.findByPk(uid)

    user.photo = await uploadPhotoCloudinary(file)

    return await user.save()
}

/*
const userPhotoUpload = async (uid, archivo, ext) => {
    const user = await User.findByPk(uid)

    user.img = await uploadFile(archivo, '/users', uid, ext)

    return user.save()
}

const userPhoto = async (uid) => {
    const user = await User.findByPk(uid)

    return await userPhotoPath(user.photo)
}
*/

module.exports = {
    userAll,
    userLogIn,
    userSignUp,
    userGoogle,
    userDetail,
    userDelete,
    userWithRoles,
    userChangePassword,
    userPhotoUpload,
    userGenerator
}