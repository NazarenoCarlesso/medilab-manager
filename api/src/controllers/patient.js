const { models } = require('../db.js')
const { Patient } = models
const bcrypt = require('bcrypt')
const generateJWT = require('../helpers/generateJWT.js')

const patientAll = async () => {
    const patients = await Patient.findAll({
        where: { deleted: false }
    })

    const filter = patients.map(patient => ({
        id: patient.id,
        firstName: patient.firstName,
        lastName: patient.lastName,
        sex: patient.sex,
    }))

    return filter
}

// login con bcrypt...

const patientLogIn = async (username, password) => {
    // Buscar al paciente por nombre de usuario
    const patient = await Patient.findOne({ where: { username } });

    // Si el paciente no existe, mostrar un mensaje de error
    if (!patient) {
        throw new Error('Usuario no encontrado');
    }

    // Si el paciente fue borrado, mostrar un mensaje de error
    if (patient.deleted) {
        throw new Error('Paciente eliminado')
    }

    // Comparar la contraseña proporcionada con la contraseña
    // almacenada en la base de datos
    const isMatch = await bcrypt.compare(password, patient.password);

    // Si las contraseñas no coinciden, mostrar un mensaje de error
    if (!isMatch) {
        throw new Error('Contraseña incorrecta');
    }

    // Todo es valido
    // Generar JWT
    const token = generateJWT(patient.id)

    return token
}

// con chequeo de duplicidad de mail...

const patientSignUp = async (username, password, email, firstName, lastName, dni, number, sex, height, civilState) => {
    try {
        // Buscar si ya existe un paciente con el correo electrónico proporcionado
        const existingPatient = await Patient.findOne({ where: { email } });


        if (existingPatient) {
            return { error: 'El correo electrónico ya está en uso' };
        }

        // Generar una contraseña encriptada con bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear un nuevo objeto de paciente con la contraseña encriptada
        const newPatient = {
            username,
            email,
            password: hashedPassword,
            firstName,
            lastName,
            dni,
            number,
            sex,
            height,
            civilState
        };

        // Crear el registro de paciente en la base de datos
        const newPatientCreated = await Patient.create(newPatient);

        return newPatientCreated;
    } catch (error) {
        console.error('Error al crear paciente:', error);
        throw error;
    }
}

const patientDelete = async (id) => {
    // Buscar al paciente por id
    const patient = await Patient.findByPk(id)

    // Si el paciente no existe, mostrar un mensaje de error
    if (!patient) {
        throw new Error('Usuario no encontrado')
    }

    // Si el paciente fue borrado, mostrar un mensaje de error
    if (patient.deleted) {
        throw new Error('El paciente ya fue eliminado')
    }

    // Borrado logico en base de datos
    patient.deleted = true

    // Guardo en base de datos al paciente
    patient.save()

    // Devuelvo el estado del paciente
    return patient.deleted
}

module.exports = {
    patientAll,
    patientLogIn,
    patientSignUp,
    patientDelete
}