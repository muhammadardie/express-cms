import express from 'express';
import mongoose from 'mongoose';
import middleware from './middleware';
import apiRoutes from './routes/apiRoutes';
import publicRoutes from './routes/publicRoutes';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import logger from './utils/logger';
import { errorResponse, successResponse } from './utils/response.js';

const app    = express()
const config = require('./config')
const cors = require('cors')


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

app.use(cors())
app.use('/uploaded_files', express.static('uploaded_files'))

app.use(
	"/api-docs",
	swaggerUi.serve,
	swaggerUi.setup(specs)
);
  
// Load the routes ("controllers" -ish)
app.use(middleware)
app.use('/api/public', publicRoutes);
app.use('/api', apiRoutes);

// Catch 400 errors
app.use((req, res) => {
	let errMessage = `Invalid request to ${req.originalUrl}`
	logger.error(errMessage); 

	return errorResponse(res, 'Bad request', errMessage);
});

// Catch 500 errors
app.use((err, req, res, next) => {
	logger.error(err.stack); 
	
	return errorResponse(res, 'Internal server error', err.message);
});

main().catch((err) => console.log(err));

async function main() {
	// Connect to the database
	await mongoose.connect(config.mongodb.url)
	.then(() => {
		logger.info("Mongoose server has started")
	})
	.catch(error => { 
		logger.error(`Caught "${error.message}" at ${Date.now()}`); 
	});
}

// Export the app instance for unit testing via supertest
module.exports = app
