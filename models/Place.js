const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Place extends Model { }

Place.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isJob: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ref_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    website: {
        type: DataTypes.STRING
    },
}, {
    sequelize
})

module.exports = Place;