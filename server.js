const
    express = require('express'),
    app = express(),
    ejsLayouts = require('express-ejs-layouts'),
    mongoose = require('mongoose'),
    flash = require('connect-flash'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    MongoDBStore = require('connect-mongodb-session')(session),
    passport = require('passport'),
    passportConfig = require('./config/passport'),
    methodOverride = require('method-override'),
    usersRouter = require('./routes/users.js')
    PORT = 3000;

app.use(express.json()),


// environment port
// const
// 	port = process.env.PORT || 3000,
// 	mongoConnectionString = process.env.MONGODB_URI || 'mongodb://localhost/wayfarer'

// // mongoose connection
// mongoose.connect(mongoConnectionString, (err) => {
// 	console.log(err || "Connected to MongoDB (passport-authentication)")
// })

app.listen(PORT, err => {
    console.log(err || `Server is listening on port ${PORT}`);
})