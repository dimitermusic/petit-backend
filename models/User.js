const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model { }

User.init({
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len:[8,16]
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        },
        unique:true
    },
    favoritePet: {
        type: DataTypes.STRING
    },
    petPic: {
        type: DataTypes.TEXT
    },
    profilePic:{
        type:DataTypes.TEXT
    }
}, {
    sequelize,
    hooks: {
        beforeCreate: userObj => {
            userObj.password = bcrypt.hashSync(userObj.password, 5);
            return userObj;
        }
    }
});

module.exports = User;