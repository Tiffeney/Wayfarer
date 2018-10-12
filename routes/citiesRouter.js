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
router.post('/:city_id/posts', City.createPost); // create a post
router.get('/:city_id/posts/new', City.newPost); //Form for creating new post.
router.get('/:city_id/posts/:post_id', City.showPost);
// router.get('/:city_id/posts/', City.showAllPost); //show all posts for a city
router.get('/:city_id/posts/:post_id/edit', City.editPost);
// router.get('/:city_id/posts/:id', City.showPost); //show Single Post for a city
router.put('/:city_id/posts/:post_id', City.updatePost); //update a post by id
router.delete('/:city_id/posts/:post_id/', City.deletePost); //delete a post by id


module.exports = router
