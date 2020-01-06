import testimony from './testimonyController';

const router = require('express').Router()

router.get('/testimony', testimony.getTestimonys)
router.post('/testimony', testimony.storeTestimony)

router.get('/testimony/:testimonyId', testimony.findTestimony)
router.put('/testimony/:testimonyId', testimony.updateTestimony)
router.delete('/testimony/:testimonyId', testimony.deleteTestimony)

module.exports = router
