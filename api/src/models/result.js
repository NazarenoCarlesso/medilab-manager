const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Result', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        value: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: true
    })
}