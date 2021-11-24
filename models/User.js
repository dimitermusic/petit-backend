const {Model, DataTypes} = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    username:{
        type: DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            min:8
        }
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            isEmail:true
        }
    },
    favoritePet:{
        type:DataTypes.STRING
    },
    petPic:{
        type:DataTypes.TEXT
    }
},{
    sequelize,
    hooks: {
        beforeCreate: userObj=>{
            userObj.password = bcrypt.hashSync(userObj.password,5);
            return userObj;
        }
    }
});

module.exports = User;