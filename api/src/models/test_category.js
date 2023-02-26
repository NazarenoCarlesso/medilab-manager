const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('test_category', {
        name: {
            type: DataTypes.STRING(25),
            allowNull: false,
            unique: true
        }
    }, {
        timestamps: false
    })
}