var path = require('path');
var express = require('express');

// create app 

var app = express();

// serve static files

var serveStatic = require('serve-static');

app.use(serveStatic(path.join(__dirname, '/static')));

// serve webpack middleware

var webpack = require('webpack');
var middleware = require('webpack-dev-middleware');
var config = require('./webpack.config.js')(process.env, { mode: 'development' });

app.use(middleware(webpack(config), { publicPath: config.output.publicPath }));

// start server

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
    console.log('Server running....');
});