import user from './userController';

const router = require('express').Router()

router.get('/user', user.getUsers)
router.post('/user', user.storeUser)
router.post('/user/exist', user.existUser)

router.get('/user/:userId', user.findUser)
router.put('/user/:userId', user.updateUser)
router.delete('/user/:userId', user.deleteUser)

module.exports = router
