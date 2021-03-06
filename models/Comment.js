const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model { }

Comment.init({
    comment: {
        type: DataTypes.STRING(1234),
        allowNull: false
    }
}, {
    sequelize
})

module.exports = Comment;