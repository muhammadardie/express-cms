import carousel from './carouselController';

const router = require('express').Router()

router.get('/carousel', carousel.getCarousels)
router.post('/carousel', carousel.storeCarousel)

router.get('/carousel/:carouselId', carousel.findCarousel)
router.put('/carousel/:carouselId', carousel.updateCarousel)
router.delete('/carousel/:carouselId', carousel.deleteCarousel)

module.exports = router
