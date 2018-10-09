const City = require('../models/City')

// LOAD ALL CITIES
exports.index = (req, res) => {
    City.find({}, (err, cities) => {
        if (err) res.json({ success: false, err});
        // res.json({ success: true, payload: cities });
        res.render('cities/index', { success: true, cities})
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

exports.show = (req, res) => {
    City.findById(req.params.city_id, (err, city) => {
        if (err) res.json({ success: false, err});
        res.json({ success: true, payload: city });
    })
}

// // UPDATE CITY
exports.update = (req, res) => {
    City.findByIdAndUpdate(req.params.city_id, req.body, (err, city) => {
        if (err) res.json({ success: false, err});
        res.json({ success: true, payload: city });
    })
}


// DELETE CITY
exports.delete = (req, res) => {
    let { city_id } = req.params;
    City.findByIdAndDelete(city_id, (err, deletedCity) => {
        if (err) res.json({ success: false, err });
        res.json({ success: true, payload: deletedCity });
    })
}



//POST CONTROLLER

// GET ALL POST FOR A CITY
exports.showAllPosts = (req, res) => {
    let { city_id } = req.params;
    console.log('Showing all post')
    City.findById(city_id, (err, city) => {
        console.log("all")
        if (err) res.json({ success: false, err});
        res.json({ success: true, payload: city.posts });
    })
};


    exports.createPost = (req, res) => {
        let { city_id } = req.params;
        console.log("REQ PARAMS", city_id)
        City.findById(city_id, (err, city) => {
            console.log("city", city)
            if (err) res.json({ success: false, err })
            // let a = {fruit:"apple"}
            // let b = {color:"green"}
            // let post = {...req.body, author:req.user} //When adding through the site
            let post = {...req.body, author:"5bb9595c1a77b1d710e74837"} //When adding via POSTMan 
            city.posts.push(post);
            city.save((err, city) => {
                if (err) res.json({ success: false, err })
                res.json({ success: true, payload: city })
            })
        })
    }

    exports.updatePost = (req, res) => {
    let { city_id, id } = req.params;
    let { body } = req;
    City.findById(city_id, (err, city) => {
        if (err) res.json({ success: false, err });

        let post =  city.posts.id(id)
            for (let key in body) { post[key] = body[key]}
            city.save((err, city) => {
                if (err) res.json({ success: false, err});
                res.json({ success: true, payload: city })
            })
    })
};

exports.deletePost = (req, res) => {
    let { city_id, id } = req.params;
    City.findById(city_id, (err, city) => {
        if (err) res.json({ success: false, err });

        let post = city.posts.id(id);
        if (post) {
            post.remove();
            city.save((err, city) => {
                if (err) res.json({ success: false, err });
                res.json({ success: true, payload: city });
            })
        } else {
            res.json({ success: false, payload: "Post does not exist." })
        }
    })
}
