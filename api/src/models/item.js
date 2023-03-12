const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Item', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    }, {
        timestamps: false
    })
}