var getRepository = require('typeorm').getRepository;
var User = require("../Entities/User");
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
        let user = req.body.user;
        getRepository(User).save(user)
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            res.json(err);
        })
    }

    logIn(req, res, next) {
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

   logOut(req, res, next) {
       res.json({'status':'0k'})
   }
  
}

module.exports = new UserController()
