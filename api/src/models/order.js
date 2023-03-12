const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Order', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        orden_id:{
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: true
    })
}