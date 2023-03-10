const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('test_category', {
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        }
    }, {
        timestamps: false
    })
}