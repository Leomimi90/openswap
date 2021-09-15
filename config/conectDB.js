const {Sequelize} = require('sequelize')
require('dotenv').config()


const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER, process.env.DB_PASS, {
    host:process.env.DB_HOST,
    dialect:'mysql'
})

let connection = async () => {
    try {
        await sequelize.authenticate()
        console.log('connection has been established successfuly');
    } catch (error) {
        console.error('Unable to coonect to database', error);
    }
}

connection();

module.exports = {
    sequelize,
}