
'use strict';
const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/conectDB');
const bcrypt = require("bcrypt")

class User extends Model {

    static associate(models) {
        // define association here
    }

    validPassword(password) {
        return bcrypt.compareSync(password, this.password);
    }
};

User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    password: DataTypes.STRING,
}, {
    sequelize,
    modelName: 'User',
});


module.exports = User;
