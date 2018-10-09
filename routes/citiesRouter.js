const express = require('express')
const router = new express.Router()
const City = require('../controllers/citiesController')
const Post = require('../controllers/citiesController')

// Show all cities
router.get('/', City.index);
router.post('/', City.create);
// Show City
router.get('/:city_id', City.show);
// // Update City
router.put('/:city_id', City.update);

// // Delete City
router.delete('/:city_id', City.delete)


//Get All Post
router.post('/:city_id/posts', Post.createPost) // create a post
router.get('/:city_id/posts/', Post.showAllPosts); //show all posts for a city
// router.get('/:city_id/posts/:id', Post.showPost); //show Single Post for a city
router.patch('/:city_id/posts/:id', Post.updatePost); //update a post by id
router.delete('/:city_id/posts/:id', Post.deletePost); //delete a post by id


module.exports = router
