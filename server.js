require('dotenv').config();

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
    usersRouter = require('./routes/users.js'),
    citiesRouter = require('./routes/citiesRouter'),
    PORT = 3000;

const
port = process.env.PORT || 3000,
	mongoConnectionString = process.env.MONGODB_URI || 'mongodb://localhost/wayfarer'

mongoose.connect(mongoConnectionString, (err) => {
    console.log(err || "Connected to MongoDB (wayfarer)")
})

const store = new MongoDBStore({
    uri: mongoConnectionString,
    collection: 'sessions'
      });

app.use(logger('dev'));
app.use(cookieParser()); 
app.use(express.urlencoded({extended: true})); 
app.use(flash()); 
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.static('public'))

//   // ejs configuration
app.set('view engine', 'ejs')
app.use(ejsLayouts)

app.use(session({
	secret: "cupcake13", //created random string
	cookie: { maxAge: 600000 },
	resave: true,
	saveUninitialized: false,
	store: store

}));

//Initizing password middleware
app.use(passport.initialize()); //Step 3
app.use(passport.session()); //Step 4
app.use('users', usersRouter)

app.use((req, res, next) => {
	app.locals.currentUser = req.user;
	app.locals.loggedIn = !!req.user

	next();
});


//root route
app.get('/', (req, res) => {
	res.render('index')
})

app.use('/users', usersRouter)
app.use('/cities', citiesRouter )

app.listen(PORT, err => {
    console.log(err || `Server is listening on port ${PORT}`);
})