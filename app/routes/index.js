import express from 'express';

const app    = express(),
	  router = express.Router();

app.use(require('../components/user/userRouter'))
app.use(require('../components/carousel/carouselRouter'))

module.exports = app