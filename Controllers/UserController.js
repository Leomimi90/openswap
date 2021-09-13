var getRepository = require('typeorm').getRepository;
var User = require('../entity/User');
class UserController {
    index(req, res, next) {
        var users = [];
        // uses getRepository to find all users from the database
        getRepository(User).find().then((doc) => {
            users = doc;
            res.json(users);
        })
    }

    register(req, res, next) {
        // res.json({
        //     success: true,
        //     data: [],
        //     message: "User successfully registered"
        // })

        // create a random user object to be saved in the database
        var newUser = {
            name:"Lorem Guy 1",
            phone_number:600000000,
            email:"lorem@gmail.com",
            password:"lorem123456789",
        }

        // saves the new user in the database and responds with the user that has been saved
        getRepository(User).save(newUser)
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    login(req, res, next) {
        // res.json({
        //     success: true,
        //     data: [],
        //     message: "login successfully, you will be redirected to your account shortly"
        // })

        // finds a single user with a given email and password
        getRepository(User).findOne({email:"lorem@gmail.com", password:"lorem123456789"})
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    account(req, res, next) {
        res.json({
            message: "Welcome to your dashboard",
            accountID: String,
            balance: {
                available: Number,
                current: Number,
                iso_currency_code: String,
                limit: null,
                verificationStatus:true 
            }
        })
    }
  
}

module.exports = new UserController()
