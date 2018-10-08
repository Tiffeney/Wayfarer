const City = require('../models/City')


// LOAD ALL CITIES
exports.index = (req, res) => {
    City.find({}, (err, cities) => {
        if (err) res.json({ success: false, err});
        res.json({ success: true, payload: cities });
        // res.render('cities/index', { success: true, payload: cities})
    })
};

// CREATE CITY
exports.create = (req, res) => {
    City.create(req.body, (err, city) => {
        if (err) res.json({ success: false, err});
        res.json({ success: true, payload: city });
    })
}

// SHOW ONE CITY

// UPDATE CITY

// DELETE CITY