const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    name: String, 
    country: String,
    image: String,
    user: {type:mongoose.Schema.Types.ObjectId, ref: 'User'}
})

const citySchema = new mongoose.Schema({
    name: String,
    picture: String,
    posts: [postSchema]
})

const City = mongoose.model('City', citySchema)

module.exports = City

//Come back to do comments