const passport = require("passport")
const { BasicStrategy } = require("passport-http")
const User = require("../Models/User")

module.exports = passport.use(new BasicStrategy(
    async function (username, password, done) {
        User.findOne({ where: { email: username } }).then(user => {
            if (!user) { return done(null, false); }
            if (!user.validPassword(password)) { return done(null, false); }
            return done(null, user);
        }).catch(err => {
            if (err) { return done(err); }
        })


    }
));