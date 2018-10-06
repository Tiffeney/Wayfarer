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


app.use(logger('dev'));
app.use(cookieParser()); 
app.use(express.urlencoded({extended: true})); 
app.use(flash()); 
app.use(methodOverride('_method'));
app.use(express.json());


//   // ejs configuration
app.set('view engine', 'ejs')
app.use(ejsLayouts)


//root route
app.get('/', (req,res) => {
	res.render('index')
})

app.listen(PORT, err => {
    console.log(err || `Server is listening on port ${PORT}`);
})