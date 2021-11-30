const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Place extends Model { }

Place.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address:{
        type: DataTypes.STRING,
        allowNull:false
    },
    isJob: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ref_id: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize
})

module.exports = Place;