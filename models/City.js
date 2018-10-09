const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: String, 
    body: String,
    author: {type:mongoose.Schema.Types.ObjectId, ref: 'User'}
})

const citySchema = new mongoose.Schema({
    name: String,
    image: String,
    posts: [postSchema]
})

const City = mongoose.model('City', citySchema)

module.exports = City

//Come back to do comments