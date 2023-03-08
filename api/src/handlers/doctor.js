const { getAllDoctors } = require("../controllers/doctor.js");

const getDoctorsHandler = async (req, res) => {
    // const { name } = req.query;
    const results = await getAllDoctors();
    res.status(200).json(results);
 };

  module.exports = {
    getDoctorsHandler,
 };