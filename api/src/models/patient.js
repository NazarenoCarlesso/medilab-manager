const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Patient', {
        username: {
            type: DataTypes.STRING(25),
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        dni: {
            type: DataTypes.STRING(25),
            allowNull: true
        },
        number: {
            type: DataTypes.STRING(25),
            allowNull: true
        },
        sex: {
            type: DataTypes.STRING(1),
            allowNull: true
        },
        height: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        civilState: {
            type: DataTypes.STRING(25),
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