// var getRepository = require('typeorm').getRepository;
// var User = require("../Entities/User");
const db = require('../src/models/index')

class UserController {
    index(req, res, next) {
        var users = [];
        // uses getRepository to find all users from the database
        getRepository(User).find().then((doc) => {
            users = doc;
            res.json(users);
        })
    }

   async register(req, res) {
        // let user = req.body.user;
        // getRepository(User).save(user)
        // .then((user) => {
        //     res.json(user);
        // })
        // .catch((err) => {
        //     res.json(err);
        // })
        try {
            const user = req.body;
            await db.User.create(user)
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json({message:error})
        }
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
