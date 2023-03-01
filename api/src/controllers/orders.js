const { models } = require('../db.js')
const { Order, Patient, Payment } = models

const orders = async (patientId) => {
    try {
        const patient = await Patient.findByPk(patientId)
        if (!patient) {
            console.log('Paciente no encontrado');
            return;
        }

        const tests = await patient.getTests()
        const testIds = tests.map((test) => test.id);

        const orders = await Order.findAll({
            where: {
                TestId: testIds
            },
            include: {
                model: Payment,
                required: true
            }
        })

        return orders
    } catch (error) {
        console.log(error);
        return []
    }
}

module.exports = { orders }


// const { models } = require('../db.js')
// const { Order, Patient, Payment } = models

// //const patientId = 1; // Aquí stablecer el id del paciente que desea obtener

// const orders = (patientId) => {
//     Patient.findByPk(patientId).then((patient) => {
//     if (!patient) {
//         console.log('Paciente no encontrado');
//         return;
//     }

//     patient.getTests().then((tests) => {
//         const testIds = tests.map((test) => test.id);

//         Order.findAll({
//         where: {
//             TestId: testIds
//         },
//         include: {
//             model: Payment,
//             required: true
//         }
//         }).then((orders) => {
//             console.log(orders);
//             return orders;
//         }).catch((error) => {
//         console.log(error);
//         });
//     }).catch((error) => {
//         console.log(error);
//     });
//     }).catch((error) => {
//     console.log(error);
//     });
// }

// module.exports = { orders }