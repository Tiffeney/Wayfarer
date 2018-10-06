const
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('../models/User');

    //creating a session key cookie
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    
 