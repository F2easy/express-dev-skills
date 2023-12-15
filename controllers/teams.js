const Team = require('../models/team')

module.exports = {
  index,
  show,
  new: newTeam,
  create,
  delete: deleteOne
};

function create(req, res) {
  console.log(req.body);
  // The model is responsible for creating data
   Team.create(req.body);
  // Do a redirect anytime data is changed
  res.redirect('/');
}

function deleteOne(id){
  id = parseInt(id);
  // find th eindex for the team
  const idx = teams.findIndex()
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

