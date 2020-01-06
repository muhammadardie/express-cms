import socmed from './socmedController';

const router = require('express').Router()

router.get('/socmed', socmed.getSocmeds)
router.post('/socmed', socmed.storeSocmed)

router.get('/socmed/:socmedId', socmed.findSocmed)
router.put('/socmed/:socmedId', socmed.updateSocmed)
router.delete('/socmed/:socmedId', socmed.deleteSocmed)

module.exports = router
