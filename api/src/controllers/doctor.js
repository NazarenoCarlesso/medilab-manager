const fetch = require('node-fetch')
const { VITAL_API } = process.env

const getAllDoctors = async () => {
    const apiDoctor = await fetch(`${VITAL_API}/apirest/medicos`).then(response => response.json());

    return apiDoctor.map(elemento => {
        return {
            dni: elemento.dni,
            name: elemento.nombre,
            sex: elemento.sexo,
        }
    });
}
module.exports = { getAllDoctors };