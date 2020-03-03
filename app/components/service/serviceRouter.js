import service from './serviceController';

const router = require('express').Router()

router.get('/service', service.getServices)
router.post('/service', service.storeService)
router.post('/service/exist', service.existService)
router.post('/service/exist/:serviceId', service.existService)

router.get('/service/:serviceId', service.findService)
router.put('/service/:serviceId', service.updateService)
router.delete('/service/:serviceId', service.deleteService)

module.exports = router
