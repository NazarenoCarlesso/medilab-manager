const { models } = require('../db.js')
const { Order, Patient, Payment } = models

const orders = async (patientId) => {
    try {
        let orders;
        if (patientId) {
            console.log("patientId en el controler >>> ",patientId);
            const patient = await Patient.findByPk(patientId)
            if (!patient) {
                console.log('Paciente no encontrado');
                return;
            }

            const tests = await patient.getTests()
            const testIds = tests.map((test) => test.id);

            orders = await Order.findAll({
                where: {
                    TestId: testIds
                },
                // include: {
                //     model: Payment,
                //     required: true
                // }
            })
        } else {
            orders = await Order.findAll();
        }
        return orders
    } catch (error) {
        console.log(error);
        return []
    }
}

module.exports = { orders }
