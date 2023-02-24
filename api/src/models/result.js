const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Result', {
        name: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
}