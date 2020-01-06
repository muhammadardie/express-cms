import gallery from './galleryController';

const router = require('express').Router()

router.get('/gallery', gallery.getGallerys)
router.post('/gallery', gallery.storeGallery)

router.get('/gallery/:galleryId', gallery.findGallery)
router.put('/gallery/:galleryId', gallery.updateGallery)
router.delete('/gallery/:galleryId', gallery.deleteGallery)

module.exports = router
