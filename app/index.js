import express from 'express';
import mongoose from 'mongoose';
import middleware from './middleware';
import apiRoutes from './routes/apiRoutes';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app    = express()
const config = require('./config')

// Connect to the database
mongoose.connect(config.mongodb.url, {
	useNewUrlParser: true, 
	useUnifiedTopology: true, 
	useCreateIndex: true,
	useFindAndModify: false
})
.catch(error => { 
	console.log(`Caught "${error.message}" at ${Date.now()}`); 
});

// setup swagger
const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'Express CMS',
			version: '1.0.0',
		},
	},
	apis: ["./app/components/**/*.js"], // files containing annotations as above
};
  
const specs = swaggerJsdoc(options);

app.use(
	"/api-docs",
	swaggerUi.serve,
	swaggerUi.setup(specs)
);
  
// Load the routes ("controllers" -ish)
app.use(middleware)
// app.use('/', publicRoutes);
app.use('/api', apiRoutes);

// Catch 400 errors
app.use((req, res) => {
    console.log(`Invalid request to ${req.originalUrl}`);
    res.status(400).json({ error: 'Bad request', url: req.originalUrl });
});

// Catch 500 errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error', message: err.message });
});

// Export the app instance for unit testing via supertest
module.exports = app
