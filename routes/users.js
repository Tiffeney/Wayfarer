const
  express = require('express'),
  usersRouter = new express.Router(),
  User = require('../controllers/userController'),
  passport = require('passport')

// render login view
usersRouter.get('/login', (req, res) => {
  res.render('login', { message: req.flash('loginMessage') });
});

usersRouter.post('/login', passport.authenticate('local-login', { //Step 3
  successRedirect: "/users/profile",
  failureRedirect: "/users/login"
}));

// render signup view
usersRouter.get('/signup', (req, res) => {
  res.render('signup', { message: req.flash('signupMessage') });
});

usersRouter.post('/signup', passport.authenticate('local-signup', { //Step 4
  successRedirect: "/users/profile",
  failureRedirect: "/users/signup"
}));

usersRouter.patch('/profile', isLoggedIn, (req, res) => {
  if (!req.body.password) delete req.body.password;
  Object.assign(req.user, req.body);
  req.user.save((err, updatedUser) => {
    if (err) return console.log(err);
    res.redirect('/users/profile');
  })
})

usersRouter.get('/profile/edit', isLoggedIn, (req, res) => {
  res.render('editProfile');
})

usersRouter.get('/logout', (req, res) => { //Step 3
  req.logout();
  res.redirect('/');
});

usersRouter.get('/profile', isLoggedIn, User.show);
usersRouter.get('/:id', isLoggedIn, User.show);

  //A method used to authorize a user BEFORE allowing them to proceed to the profile page. Adding Middleware
function isLoggedIn(req, res, next) { //Step 1
  //If the user is authenticated, proceed to the requested route
  if (req.isAuthenticated()) return next()
  //Otherwise, return them to the login page
  res.redirect('/users/login');
}





module.exports = usersRouter