import auth from './authController';

const router = require('express').Router()

router.post('/login', auth.login)

module.exports = router
