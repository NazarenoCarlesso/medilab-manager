const fetch = require('node-fetch')

const { VITAL_API } = process.env

const doctorAll = async () => {
    const doctors = await fetch(`${VITAL_API}/apirest/medicos`)
        .then(response => response.json())

    return doctors.map(doctor => ({
        dni: doctor.dni,
        name: doctor.nombre,
        sex: doctor.sexo,
    }))
}

module.exports = { doctorAll }