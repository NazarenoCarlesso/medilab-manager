const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Test_category', {
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