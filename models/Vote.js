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
    // user_id:{
    //     type:DataTypes.INTEGER,
    //     references:{
    //         model:'user',
    //         key:'id'
    //     }
    // },
    // place_id:{
    //     type:DataTypes.INTEGER,
    //     references:{
    //         model:'place',
    //         key:'id'
    //     }
    // },
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