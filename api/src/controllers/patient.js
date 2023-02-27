const { models } = require('../db.js')
const { Patient } = models
const bcrypt = require('bcrypt');

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

const patientLogIn = async (username, password) => {
    const patient = await Patient.findOne({
        where: { username: username, password: password }
    })

    const { id, firstName, lastName } = patient

    return { id, firstName, lastName }
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
    console.log('Paciente creado:', newPatientCreated.toJSON());

    return newPatientCreated;
} catch (error) {
    console.error('Error al crear paciente:', error);
    throw error;
}
};


// const patientSignUp = async (username, password, email, firstName, lastName, dni, number, sex, height, civilState) => {
//     try {
//       // Generar una contraseña encriptada con bcrypt
//       const hashedPassword = await bcrypt.hash(password, 10);
  
//       // Crear un nuevo objeto de paciente con la contraseña encriptada
//       const newPatient = {
//         username,
//         email,
//         password: hashedPassword,
//         firstName,
//         lastName,
//         dni,
//         number,
//         sex,
//         height,
//         civilState
//       };
  
//       // Crear el registro de paciente en la base de datos
//       const newPatientCreated = await Patient.create(newPatient);
//       console.log('Paciente creado:', newPatientCreated.toJSON());
  
//       return newPatientCreated;
//     } catch (error) {
//       console.error('Error al crear paciente:', error);
//       throw error;
//     }
//   };


module.exports = { patientAll, patientLogIn, patientSignUp }