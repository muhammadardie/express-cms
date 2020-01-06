import company from './companyController';

const router = require('express').Router()

router.get('/company', company.getCompanys)
router.post('/company', company.storeCompany)

router.get('/company/:companyId', company.findCompany)
router.put('/company/:companyId', company.updateCompany)
router.delete('/company/:companyId', company.deleteCompany)

module.exports = router
