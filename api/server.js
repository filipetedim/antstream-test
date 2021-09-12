// Package dependencies
const Mongoose = require('mongoose');
const Express = require('express');
const Http = require('http');
const Cors = require('cors');
const BodyParser = require('body-parser');

// Init
const app = Express();
const server = Http.Server(app);

// Mongoose settings
const connectionUrl = `mongodb+srv://admin:94NCDfijPuuLFtR@cluster0.pyvwh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
Mongoose.Promise = global.Promise;
Mongoose.set('useFindAndModify', False);
Mongoose.connect(connectionUrl, { useNewUrlParser: true }).catch((err) => {
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
  process.env.PORT,
  () => console.log(`Server started on port ${process.env.PORT}`) // eslint-disable-line
);

modules.exports = app;
