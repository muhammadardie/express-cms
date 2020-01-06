import contact from './contactController';

const router = require('express').Router()

router.get('/contact', contact.getContacts)
router.post('/contact', contact.storeContact)

router.get('/contact/:contactId', contact.findContact)
router.put('/contact/:contactId', contact.updateContact)
router.delete('/contact/:contactId', contact.deleteContact)

module.exports = router
