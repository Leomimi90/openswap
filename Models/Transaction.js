
'use strict';
const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/conectDB');
const bcrypt = require("bcrypt")

class Transaction extends Model {

    static associate(models) {
        // define association here
    }

    validPassword(password) {
        return bcrypt.compareSync(password, this.password);
    }
};

Transaction.init({
    user_d: DataTypes.BIGINT,
}, {
    sequelize,
    modelName: 'Transaction',
});


module.exports = Transaction;
