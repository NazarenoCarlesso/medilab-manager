const fetch = require('node-fetch')
const bcrypt = require('bcrypt')
const { fromString } = require('uuidv4')

// models
const { models } = require('../db.js')
const { User, test_category, Sample, Test, Item, Order, Result } = models

// utils
const { toFirstName, toLastName, toUnique, toPhoto, CapitalizeFirst } = require('../utils/index.js')
const order = require('../models/order.js')

const userGenerator = async () => {

    const users = await fetch(`${process.env.VITAL_API}/apirest/pacientes`)
        .then(response => response.json())

    const password = await bcrypt.hash('password', 10)
    
    await Promise.all(users.map(user => User.create({
        id: fromString(user.id.toString()),
        firstName: toFirstName(user.nombres),
        lastName: toLastName(user.apePaterno),
        dni: user.dni,
        height: null,
        sex: user.sexo,
        civil: null,
        phone: user.telefono,
        photo: toPhoto(user.sexo),
        email: toUnique(user.apePaterno, user.apeMaterno, user.id) + '@gmail.com',
        username: toUnique(user.apePaterno, user.apeMaterno, user.id),
        password: password
    })))

    await User.create({
        id: fromString('999'), firstName: 'admin', lastName: 'admin',
        username: 'admin1', password: await bcrypt.hash('admin1', 10),
        email: 'admin@admin.com', role: 'ADMIN'
    })
}

const categoryGenerator = async () => {
    const categories = await fetch(`${process.env.VITAL_API}/apirest/categorias`)
        .then(response => response.json())

    Promise.all(categories.map(category => test_category.create({
        id: fromString(category.id.toString()),
        name: CapitalizeFirst(category.nombre)
    })))
}

const sampleGenerator = async () => {
    const samples = await fetch(`${process.env.VITAL_API}/apirest/muestras`)
        .then(response => response.json())

    Promise.all(samples.map(sample => Sample.create({
        id: fromString(sample.id.toString()),
        name: CapitalizeFirst(sample.nombre)
    })))
}


const itemGenerator = async () => {
    const items = await fetch(`${process.env.VITAL_API}/apirest/caracteristicas`)
        .then(response => response.json())

    await Promise.all(items.map(async item => {
      const newItem = await Item.create({
        id: fromString(item.id.toString()),
        name: item.nombre ? CapitalizeFirst(item.nombre.slice(0,49)) : item.id+" > id antiguo sin nombre",
      });
      if (await Test.findByPk(fromString(item.id_examen))){
        await newItem.addTest(fromString(item.id_examen.toString()));
        }
    }));
}

const testGenerator = async () => {
    let tests = await fetch(`${process.env.VITAL_API}/apirest/examenes`)
        .then(response => response.json())

    tests = tests.filter(test => test.categoria !== '24')

    Promise.all(tests.map(test => Test.create({
        id: fromString(test.id.toString()),
        name: CapitalizeFirst(test.nombre),
        description: 'Descripción',
        price: test.precio && test.precio !== '-' ? Number(test.precio) : null,
        time: test.tiempo_resultado ? test.tiempo_resultado : '5 horas',
        testCategoryId: test.categoria !== '-' ? fromString(test.categoria.toString()) : null,
        SampleId: (test.muestra !== '-'&& test.muestra !=='') ? fromString(test.muestra.toString()) : null
    })))
}

const orderGenerator = async () => {
    let orders = await fetch(`${process.env.VITAL_API}/apirest/ordenes`)
        .then(response => response.json());

        // tengo que desarmar el examen para crear distintas orders por cada examen con formato de id= idorderAPI+idTest
        //console.log(orders); // orders es un array de objetos order
        
        orders.forEach(async order => {
            if (await User.findByPk(fromString(order.id_paciente.toString())) ) { //&& order.id!=="5623" && order.id!=="5662" >>> esas tenian testy repetidos.
                let testsids = order.examen.split(",");

                const uniqueTestIds = [... new Set(testsids)]; // vienen test repetidos en la misma orden, con esto los saco.
                await uniqueTestIds.forEach(async testid => {

                    if (await Test.findByPk(fromString(testid))){

                    const newOrder = {
                        id: fromString(order.id+'-'+testid.toString()),
                        createdAt: order.fec_crea,
                        orden_id: order.id,
                        TestId: fromString(testid.toString()),
                        UserId: fromString(order.id_paciente.toString())
                    }
                    await Order.create(newOrder);
                    }
                })
            }
        });
}

const resultGenerator = async () => {
    let results = await fetch(`${process.env.VITAL_API}/apirest/resultados`)
        .then(response => response.json());
        
        Promise.all(results.map(async (result) => {
            const order = await Order.findByPk(fromString(result.id_orden+'-'+result.id_examen.toString()));
            const test = await Test.findByPk(fromString(result.id_examen.toString()));
            const item = await Item.findByPk(fromString(result.id_caracteristica.toString()));
            // console.log("item api (caracteristica)--->> ",result.id_caracteristica);
            // console.log("item id--->> ",fromString(result.id_caracteristica.toString()));
            // console.log("item --->> ",item);
            
            if (order && test && item) {
                return Result.create({
                id: fromString(result.id.toString()),
                value: result.resultado !== '' && Number.isInteger(Number(result.resultado))
                    ? parseInt(result.resultado)
                    : 0,
                // Asociaciones con objetos encontrados
                //Order: order,
                OrderId: order.id,
                //Test: test,
                //TestId: test.id,
                //Item: item,
                ItemId: item.id,
                });
            };
          }));
       
        // Promise.all(results.map(result => Result.create({
        //     id: fromString(result.id.toString()),
        //     orderId: fromString(result.id_orden.toString()),
        //     TestId: fromString(result.id_examen.toString()),
        //     itemId: fromString(result.id_caracteristica.toString()),
        //     value: result.resultado !== '' && Number.isInteger(Number(result.resultado))
        //     ? parseInt(result.resultado) // si es number lo convertimos a integer
        //     : 0
        // })));
}

module.exports = {
    userGenerator,
    sampleGenerator,
    categoryGenerator,
    itemGenerator,
    testGenerator,
    orderGenerator,
    resultGenerator
}


