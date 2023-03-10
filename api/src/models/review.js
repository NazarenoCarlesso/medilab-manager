const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Review', {
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        timestamps: true
    })
}