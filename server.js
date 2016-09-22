"use strict";
const express = require("express");
const path = require("path");
const compression = require('compression');
const middleware = require('./middleware');
const app = express();
const PORT = process.env.PORT || 3000;
const date = new Date();

app.use(compression());

app.use(middleware.logger);

// route middleware
app.get("/about", middleware.requireAuthentication, (req, res) => {
	res.send("About Me");
});


app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, function() {
	console.log(`Server Running at ${PORT}`);
});
