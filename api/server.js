// Package dependencies
const Mongoose = require('mongoose');
const Express = require('express');
const Http = require('http');
const Cors = require('cors');
const BodyParser = require('body-parser');

// Custom dependencies
const Config = require('./config');

// Init
const app = Express();
const server = Http.Server(app);

// Mongoose settings
Mongoose.Promise = global.Promise;
Mongoose.connect(Config.getDatabaseConnectionUrl(), { useNewUrlParser: true }).catch((err) => {
  throw Error(err);
});

// Middlewares
app.options('*', Cors());
app.use(Cors());
app.use(BodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(BodyParser.json({ limit: '50mb' }));

// Routes
// TODO: add routes to get data

// Run server
server.listen(
  process.env.PORT || Config.PORT,
  () => console.log(`Server started on port ${process.env.PORT || Config.PORT}`) // eslint-disable-line
);

module.exports = app;
