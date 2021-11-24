const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reaction extends Model {}

Reaction.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id:{
        type:DataTypes.INTEGER,
        references:{
            model:'user',
            key:'id'
        }
    },
    comment_id:{
        type:DataTypes.INTEGER,
        references:{
            model:'comment',
            key:'id'
        }
    },
    like:{
        type:DataTypes.BOOLEAN
    },
    heart:{
        type:DataTypes.BOOLEAN
    },
    disapproval:{
        type:DataTypes.BOOLEAN
    }
},{
    sequelize
});

module.exports = Reaction;