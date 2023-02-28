const { patientAll, patientLogIn, patientSignUp } = require("../controllers/patient")

const patientAllHandler = async (req, res) => {
    const patients = await patientAll()

    res.status(200).json(patients)
}


// con 
const patientLogInHandler = async (req, res) => {
    try {
      const { username, password } = req.body;
  
      const patient = await patientLogIn(username, password);
  
      res.status(200).json(patient);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      res.status(401).json({ message: 'Inicio de sesión fallido' });
    }
  };
  


const patientSignUpHandler = async (req, res) => {
    try {
      const { username, password, email, firstName, lastName, dni, number, sex, height, civilState } = req.body;
      const newPatient = await patientSignUp(username, password, email, firstName, lastName, dni, number, sex, height, civilState);
  
      if (newPatient.error) {
        return res.status(409).json({ error: newPatient.error });
      }
  
      return res.status(201).json(newPatient);
    } catch (error) {
      console.error('Error al crear paciente:', error);
      return res.status(500).json({ error: 'Error al crear paciente' });
    }
  };
  
  
module.exports = { patientAllHandler, patientLogInHandler, patientSignUpHandler }
