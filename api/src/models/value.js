const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Value', {
        name: {
            type: DataTypes.STRING(25),
            allowNull: false
        }
    })
}