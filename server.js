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
PORT = 3000;

app.use(express.json()),

app.listen(PORT, err => {
    console.log(err || `Server is listening on port ${PORT}`);
})