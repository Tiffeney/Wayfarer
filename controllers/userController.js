const User = require('../models/User');
const City = require('../models/City');
const mongoose = require('mongoose');

exports.show = async (req, res) => {
    // Grab the id out of the request object
    let id = req.params.id;
    id = id ? mongoose.Types.ObjectId(id) : req.user._id;
    let user = await User.findById(id);
    City.aggregate([{
        $match: { 'posts.author': id }},
        { $unwind: '$posts' }, {
        $match: { 'posts.author': id }}, {   
        $project: {
            title: '$posts.title',
            author: '$posts.author'
        } 
    }]).exec((err, posts) => {
        if (err) res.json({ err })
        // res.json({ user, posts });
        res.render('profile', { user, posts})
    })
    // console.log(id)
    // res.render('profile', { user: req.user });
}

