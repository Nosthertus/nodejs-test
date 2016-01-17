/**
 * Load all modules
 */
var diet = require('diet');

// Instantiate diet server
var app = diet();

// Listen server to port 3000
app.listen(3000);

// Register '/' as index and return data
app.get('/', function($){
	$.end('Hello world');
});