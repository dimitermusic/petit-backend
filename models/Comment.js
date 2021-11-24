const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model{}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
    },
    place_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'place',
          key: 'id',
        },
    },
    comment:{
        type:DataTypes.STRING,
        validate:{
            max:255
        },
        allowNull:false
    }
},{
    sequelize
})

module.exports = Comment;