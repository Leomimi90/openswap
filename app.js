var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var typeorm = require('typeorm');

var apiRouter = require('./routes/api');

require('dotenv').config({ path: '.env' });

/**
 * providing settings for a typeorm connection and running the connection
 * a ormconfig.json can also be used for this
 *  */ 
var connection = typeorm.createConnection({
    "type": "mysql",
    "host": process.env.DB_HOST,
    "port": 3306,
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "entities": [
        "entity/*.js"
    ],
    "logging": true,
    "synchronize": true
})
.then(()=>{
    console.log("typeorm connection created")
})
.catch((err)=> {
    console.log(err);
})

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', apiRouter);

module.exports = app;
