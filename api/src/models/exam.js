const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Exam', {
        name: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        timestamps: false
    })
}