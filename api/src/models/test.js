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
            type: DataTypes.INTEGER,
            allowNull: false
        },
        time: {
            type: DataTypes.STRING(25),
            allowNull: false
        }
    }, {
        timestamps: false
    })
}