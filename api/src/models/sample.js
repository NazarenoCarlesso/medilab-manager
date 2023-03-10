const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Sample', {
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        }
    }, {
        timestamps: false
    })
}