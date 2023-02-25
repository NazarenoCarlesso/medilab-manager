const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Item', {
        name: {
            type: DataTypes.STRING(25),
            allowNull: false
        }
    }, {
        timestamps: false
    })
}