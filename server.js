"use strict";
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
const HOST = "127.0.0.1";
const date = new Date();

const middleware = {
	requireAuthentication(req, res, next) {
		console.log("prive route hit!");
		next();
	},

	logger(req, res, next) {
		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl );
		next();
	}
};

// application middleware
// app.use(middleware.requireAuthentication);

app.use(middleware.logger);

// route middleware
app.get("/about", middleware.requireAuthentication, (req, res) => {
	res.send("About Me");
});


app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, HOST, function() {
	console.log(`Server Running at http://${HOST}:${PORT}`);
});
