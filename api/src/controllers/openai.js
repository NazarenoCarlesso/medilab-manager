const { Configuration, OpenAIApi } = require("openai");
const { models } = require('../db.js')
const { Test } = models

const configuration = new Configuration({
  organization: "org-ry1mblDUuda45uZTCee4vexY",
  apiKey: process.env.OPENAI_API_KEY,
});
////////////////////////////////////////////////////

const openaiApi = new OpenAIApi(configuration);

const getAnswer = async () => {
  const tests = await Test.findAll();
  const names = tests.map(test => test.dataValues.name);

  for (const name of names) {
    const test = await Test.findOne({ where: { name: name } });
    await actualizarDescripcion(test);
  }
  async function actualizarDescripcion(test) {
    if (test.description.length > 15) {
      console.log(`El test de ${test.name} ya tiene descripción `);
      return;
    }
    const response = await openaiApi.createCompletion({
      model: 'text-davinci-003',
      prompt: `¿Qué es el examen de ${test.name}?`,
      temperature: 0,
      max_tokens: 1000,
      n: 1,
    });
    const answer = response.data.choices[0].text;

    Test.findOne({ where: { name: test.name } })
      .then(Test => {
        if (Test) {
          Test.update({ description: answer })
            .then(() => {
              console.log(`La descripción de ${test.name} se actualizó correctamente`);
            })
            .catch(error => {
              console.error(`Error al actualizar la descripción de ${test.name}:`, error);
            });
        }
      })
      .catch(error => {
        console.error(`Error al buscar el registro de ${test.name}:`, error);
      });
  }
}


module.exports = {
  getAnswer
};