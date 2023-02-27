const { models } = require('../db.js')
const { Patient } = models

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

const patientSignUp = async (username, password, email, firstName, lastName, dni, number, sex, height, civilState) =>{
    
    const newPatient = {
        username,
        email,
        password,
        firstName,
        lastName,
        dni,
        number,
        sex,
        height,
        civilState
      };
      
    const newPatientCreated = await Patient.create(newPatient)
        .then(patient => {
          console.log('Paciente creado:', patient.toJSON());
        })
        .catch(error => {
          console.error('Error al crear paciente:', error);
        });
    
    
    

    return newPatientCreated;

}

module.exports = { patientAll, patientLogIn, patientSignUp }