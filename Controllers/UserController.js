const User = require('../Models/User');
const bcrypt = require('bcrypt');

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
        try {
            const user = req.body.user;
            let salt = bcrypt.genSaltSync(10);
            user.password = bcrypt.hashSync(user.password, salt);
            await User.create(user)
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json({ message: error })
        }
    }

    logIn(req, res, next) {
        res.json(req.user)
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
                verificationStatus: true
            }
        })
    }

    logOut(req, res, next) {
        res.json({ 'status': '0k' })
    }

}

module.exports = new UserController()
