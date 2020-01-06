import inbox from './inboxController';

const router = require('express').Router()

router.get('/inbox', inbox.getInboxs)
router.post('/inbox', inbox.storeInbox)

router.get('/inbox/:inboxId', inbox.findInbox)
router.put('/inbox/:inboxId', inbox.updateInbox)
router.delete('/inbox/:inboxId', inbox.deleteInbox)

module.exports = router
