const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Result', {
        value: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false
    })
}