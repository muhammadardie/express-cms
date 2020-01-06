import about from './aboutController';

const router = require('express').Router()

router.get('/about', about.getAbouts)
router.post('/about', about.storeAbout)

router.get('/about/:aboutId', about.findAbout)
router.put('/about/:aboutId', about.updateAbout)
router.delete('/about/:aboutId', about.deleteAbout)

module.exports = router
