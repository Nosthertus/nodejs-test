/**
 * Load all modules
 */
var diet = require('diet'),
	static = require('./bin/diet-static');

// Instantiate diet server
var app = diet();

// Listen server to port 3000
app.listen(3000);

var files = static({
	path: app.path + '/static',
	index: false,
	showScriptName: false,
	cache: 'no-store'
});

app.footer(files);