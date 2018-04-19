var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cors = require('cors');

// make connection to the database 
// here i am connecting to the database in mongodb 
mongoose.connect('mongodb://localhost/fut', function (error) {
    if (error) {//error handling 
        console.log(error);
    } else {//tells if the connection is successful
        console.log("connection successful");
    }
});

app.use(morgan('dev'));                                       
app.use(bodyParser.urlencoded({ 'extended': 'true' }));            
app.use(bodyParser.json());                                    
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());
app.use(cors());
//headers
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Model for mongo database.
var user = mongoose.model('details', {
	id: Number,
	Name : String,
	Nationality :String,
	National_Position : String,
	Club : String, 
	Club_Position : String,
	Club_Kit : Number,
	Rating : Number,
	Height : Number,
	Weight : String,
	Birth_Date : String,
	Age : Number,
	Ball_Control : Number,
	Marking : Number,
	Speed : Number,
	Strength : Number,
	Shot_Power : Number,
	Finish : Number,
	GK_Diving :Number,
	GK_Reflexes : Number,
});


//
//this function returns all the players in the database
app.get('/players', function (req, res) {
    mongoose.model('details').find(function (err, details) {
        res.send(details);
    });
});

app.listen(8081);
console.log("App listening on port 8081");
