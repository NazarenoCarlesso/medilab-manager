const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Test', {
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        price: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        time: {
            type: DataTypes.STRING(50),
            allowNull: true
        }
    }, {
        timestamps: false
    })
}