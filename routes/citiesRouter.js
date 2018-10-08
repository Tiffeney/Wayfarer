const express = require('express')
const router = new express.Router()
const City = require('../controllers/citiesController')

// Show all cities
router.get('/', City.index);
router.post('/', City.create);
// Show City
// router.get('/', City.show);
// // Update City
// router.get('/', City.put)
// // Delete City
// router.get('/', City.delete)

module.exports = router