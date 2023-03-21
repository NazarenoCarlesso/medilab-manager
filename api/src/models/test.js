const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Test', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        ///////////////////////////////////
        description: {
            type: DataTypes.TEXT('long'),
            defaultValue: '',
            allowNull: true
        },
        price: {
            type: DataTypes.INTEGER,
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