const
    express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    PORT = 3000;

app.use(express.json()),

app.listen(PORT, err => {
    console.log(err || `Server is running on port ${PORT}`);
})