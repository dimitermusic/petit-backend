const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reaction extends Model { }

Reaction.init({
    like: {
        type: DataTypes.BOOLEAN
    },
    heart: {
        type: DataTypes.BOOLEAN
    },
    disapproval: {
        type: DataTypes.BOOLEAN
    }
}, {
    sequelize
});

module.exports = Reaction;