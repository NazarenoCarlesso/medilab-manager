const fetch = require('node-fetch')
const bcrypt = require('bcrypt')

// models
const { models } = require('../db.js')
const { User, test_category, Sample, Test } = models

// utils
const { toFirstName, toLastName, toUnique, toPhoto, CapitalizeFirst } = require('../utils/index.js')

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
        username: 'admin1', password: await bcrypt.hash('admin1', 10),
        email: 'admin@admin.com', role: 'ADMIN'
    })
}

const categoryGenerator = async () => {
    const categories = await fetch(`${process.env.VITAL_API}/apirest/categorias`)
        .then(response => response.json())

    Promise.all(categories.map(category => test_category.create({
        id: category.id,
        name: CapitalizeFirst(category.nombre)
    })))
}

const sampleGenerator = async () => {
    const samples = await fetch(`${process.env.VITAL_API}/apirest/muestras`)
        .then(response => response.json())

    Promise.all(samples.map(sample => Sample.create({
        id: sample.id,
        name: CapitalizeFirst(sample.nombre)
    })))
}

const testGenerator = async () => {
    let tests = await fetch(`${process.env.VITAL_API}/apirest/examenes`)
        .then(response => response.json())

    tests = tests.filter(test => test.categoria !== '24')

    Promise.all(tests.map(test => Test.create({
        id: test.id,
        name: CapitalizeFirst(test.nombre),
        description: 'Descripción',
        price: test.precio && test.precio !== '-' ? Number(test.precio) : null,
        time: test.tiempo_resultado ? test.tiempo_resultado : '5 horas',
        testCategoryId: test.categoria && test.categoria !== '-' ? test.categoria : null,
        SampleId: test.muestra && test.muestra !== '-' ? test.muestra : null
    })))
}

module.exports = {
    userGenerator,
    sampleGenerator,
    categoryGenerator,
    testGenerator
}