const { Doctor} = require("../db");
const axios = require("axios");


const getAllDoctors = async () =>{
    const apiDoctor = await axios.get('http://190.117.82.120/apirest/medicos')
  
        const allDoctors = apiDoctor.data.map(elemento =>{
            return {                
                dni:elemento.dni,
                name:elemento.nombre,                
                sex:elemento.sexo,
            }
        })
        await Doctor.bulkCreate(allDoctors)//creación de varios registros a la vez
}
 
// const searchUserByName = async (name) =>{
//     const databaseUsers = await User.findAll({ where: {name:name} });
//     const apiUsersRaw = ( await axios.get("https://jsonplaceholder.typicode.com/users")).data;
//     const apiUsers = cleanArray(apiUsersRaw);
//     const filteredApi = apiUsers.filter((user) => user.name === name)
//     return [ ...filteredApi, ...databaseUsers]
// }
module.exports = { getAllDoctors };