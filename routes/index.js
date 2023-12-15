var express = require('express');
var router = express.Router();
const team = require("../models/team")
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', {
      team: team.getAll(),
  });
});

module.exports = router;

