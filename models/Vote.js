const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vote extends Model { }

Vote.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    hasStipendUp: {
        type: DataTypes.BOOLEAN
    },
    hasStipendDown: {
        type: DataTypes.BOOLEAN
    },
    canBringUp: {
        type: DataTypes.BOOLEAN
    },
    canBringDown: {
        type: DataTypes.BOOLEAN
    },
    canMenuUp: {
        type: DataTypes.BOOLEAN
    },
    canMenuDown: {
        type: DataTypes.BOOLEAN
    },
}, {
    sequelize
});

module.exports = Vote;