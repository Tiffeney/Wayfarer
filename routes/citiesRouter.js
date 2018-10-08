const express = require('express')
const router = new express.Router()
const City = require('../controllers/citiesController')

// Show all cities
router.get('/', City.index);
router.post('/', City.create);
// Show City
router.get('/:id', City.show);
// // Update City
router.put('/:id', City.update);

// // Delete City
router.delete('/:id', City.delete)

module.exports = router