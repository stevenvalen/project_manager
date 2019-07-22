var mongoose = require('mongoose');
var path = require('path');
var fs = require('fs')

//connect to our mongodb in this case using productManager as the db name change it acordingly 
mongoose.connect('mongodb://localhost/productManager',
    {}, (err) => {
        if (err) {
            console.log("ERROR", err);
        } else {
            console.log("CONNECTED!");
        }
    });

    //directory about our schemas
var models_path = path.join(__dirname, './../models');

//iterates through the models folder and searches for all the model js files
fs.readdirSync(models_path).forEach((file) => {
    if (file.indexOf('.js') >= 0) {
        require(models_path + '/' + file);
    }
});