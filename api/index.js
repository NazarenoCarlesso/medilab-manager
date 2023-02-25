require('dotenv').config()
const sequelize = require('./src/db.js')
const server = require('./src/server.js')
const { PORT } = process.env

sequelize.sync({ force: true }).then(() => {
    console.log(`database connection successful`)
    server.listen(PORT, () => {
        console.log(`server listening on port ${PORT}`)
    })
}).catch(() => console.log(`database connection failed`))