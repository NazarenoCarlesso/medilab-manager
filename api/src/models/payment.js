const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Payment', {
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: true
    })
}