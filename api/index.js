require('dotenv').config()
const sequelize = require('./src/db.js')
const server = require('./src/server.js')
// environment variables
const { PORT, DB_FORCE } = process.env
// server listening
sequelize.sync({ alter: DB_FORCE ? true : false }).then(() => {
    console.log(`database connection successful`)
    server.listen(PORT, () => {
        console.log(`server listening on port ${PORT}`)
    })
}).catch(() => console.log(`database connection failed`))