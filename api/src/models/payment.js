const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Payment', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        timestamps: true
    })
}