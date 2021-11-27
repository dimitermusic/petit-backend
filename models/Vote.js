const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vote extends Model { }

Vote.init({
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
    hasMenuUp: {
        type: DataTypes.BOOLEAN
    },
    hasMenuDown: {
        type: DataTypes.BOOLEAN
    },
    petTimeOffUp: {
        type: DataTypes.BOOLEAN
    },
    petTimeOffDown: {
        type: DataTypes.BOOLEAN
    },
}, {
    sequelize
});

module.exports = Vote;