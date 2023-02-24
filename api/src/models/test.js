const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Test', {
        name: {
            type: DataTypes.STRING(25),
            allowNull: false
        }
    })
}