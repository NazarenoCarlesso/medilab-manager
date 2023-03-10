const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('User', {
        username: {
            type: DataTypes.STRING(50),
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
            type: DataTypes.STRING(50),
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        dni: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        photo: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        phone: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        sex: {
            type: DataTypes.STRING(1),
            allowNull: true
        },
        height: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        civil: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        role: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        }
    }, {
        timestamps: true
    })
}