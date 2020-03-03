import header from './headerController';

const router = require('express').Router()

router.get('/header', header.getHeaders)
router.post('/header', header.storeHeader)
router.post('/header/exist', header.existHeader)
router.post('/header/exist/:headerId', header.existHeader)

router.get('/header/:headerId', header.findHeader)
router.get('/header/page/:page', header.findHeaderByPage)
router.put('/header/:headerId', header.updateHeader)
router.delete('/header/:headerId', header.deleteHeader)

module.exports = router
