var express = require('express');
var router = express.Router();
var teamsCtrl =  require('../controllers/teams');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// GET/ teams
router.get('/', teamsCtrl.index)

// GET/teams/new --> Always before/above show 
router.get('/new', teamsCtrl.new);

//GET/teams/:id/edit

// GET/teams/ id
router.get('/:id', teamsCtrl.show);

// POST/teams
router.post('/', teamsCtrl.create);
// DELETE/teams/id
router.delete('/:id', teamsCtrl.delete);

module.exports = router;
