const
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('../models/User');

    // creating a session key cookie
passport.serializeUser((user, done) => {
    done(null, user.id);
});
    
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

//LOCAL Signup
passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, email, password, done) => {
    User.findOne({ email }, (err, user) => {
        if (err) return done(err);
        if (user) return done(null, false, req.flash('signupMessage', "Email already taken."));
        User.create(req.body, (err, newUser) => {
            if (err) return console.log(err);
            return done(null, newUser, null);
        })
    })
}));

// LOCAL LOGIN
passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: "password",
    passReqToCallback: true
}, (req, email, password, done) => {
    User.findOne({ email }, (err, user) => {
        if (err) return done(err);
        if (!user) return done(null, false, req.flash('signupMessage', "User doesn't exist."));
        if (!user.isValidPassword(password)) return done(null, false, req.flash('loginMessage', "Incorrect Password."));
        return done(null, user);
    })
}))

module.exports = passport;