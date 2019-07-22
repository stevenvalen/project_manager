var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path')
//use body-parser for json data
app.use(bodyParser.json());
//path to angular directory
app.use(express.static(__dirname + '/public/dist/public'));

//provide path to our node server routes
require('./server/config/routes')(app);

//if the route called is not in the node server send the request to the angular routes
app.all("*", (req, res, next) => {
     res.sendFile(path.resolve("./public/dist/public/index.html"))
 });

 //provide path to localhost 
app.listen(8000, function () {
    console.log('Listening on port 8000 manager');
});
//provide path for our mongoose file
require('./server/config/mongoose');

