const {
    getAnswer,
} = require('../controllers/openai')


const openaiAllHandler = async (req, res) => {
    const question = req.query.question;
    const answer = await getAnswer(question);
    res.status(200).send(answer);

}


module.exports = {
    openaiAllHandler,
}