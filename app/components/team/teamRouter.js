import team from './teamController';

const router = require('express').Router()

router.get('/team', team.getTeams)
router.post('/team', team.storeTeam)

router.get('/team/:teamId', team.findTeam)
router.put('/team/:teamId', team.updateTeam)
router.delete('/team/:teamId', team.deleteTeam)

module.exports = router
