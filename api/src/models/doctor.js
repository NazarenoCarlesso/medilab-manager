const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Doctor', {
        
        name: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        dni: {
            type: DataTypes.STRING(25),
            allowNull: true
        },
        sex: {
            type: DataTypes.STRING(1),
            allowNull: true
        },       
        deleted: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        }
    }, {
        timestamps: false
    })
}