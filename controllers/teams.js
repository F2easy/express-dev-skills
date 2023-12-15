const Team = require('../models/team')

module.exports = {
  index,
  show,
  new: newTeam,
  create,
  delete: deleteTeam
};


function deleteTeam(req, res) {
  Team.deleteOne(req.params.id);
  res.redirect('/');
}


function create(req, res) {
  console.log(req.body);
  // The model is responsible for creating data
   Team.create(req.body);
  // Do a redirect anytime data is changed
  res.redirect('/');
}


function newTeam(req,res){
  res.render('teams/new', {title: 'New Team'})
}

function index(req, res) {
  res.render('teams/index', {
    teams: Team.getAll()
  });
}

function show(req, res){
 res.render('teams/show', {
 team: Team.getOne(req.params.id),

  });
}

