import express from 'express';
import mongoose from 'mongoose';
import middleware from './middleware';
import routes from './routes';
import path from 'path';

const 
	app    = express(),
	config = require('./config');

// Connect to the database
mongoose.connect(config.mongodb.url, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

// Load the routes ("controllers" -ish)
app.use(middleware)
app.use('/api', routes)

// Export the app instance for unit testing via supertest
module.exports = app
