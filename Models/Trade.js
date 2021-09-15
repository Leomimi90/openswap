
'use strict';
const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/conectDB');
const bcrypt = require("bcrypt")

class Trade extends Model {

    static associate(models) {
        // define association here
    }

    validPassword(password) {
        return bcrypt.compareSync(password, this.password);
    }
};

Trade.init({
    currency: DataTypes.STRING,
    type: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    user_id: DataTypes.BIGINT
}, {
    sequelize,
    modelName: 'Trade',
});


module.exports = Trade;
