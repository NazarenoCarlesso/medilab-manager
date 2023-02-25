const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Sample', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(25),
            allowNull: false
        }
    }, {
        timestamps: false
    })
}