const teams = [
  {id: 125, name: 'Dogs', qualify: true},
  {id: 111, name: 'Lions', qualify: false},
  {id: 139, name: 'Wolves', qualify: true},
  {id: 108, name: 'Shells', qualify: false},
  {id: 131, name: 'Sharks', qualify: true}
];

module.exports = {
  getAll,
  getOne,
  deleteOne,
  create

};

function create(team){
  team.id = Date.now() % 1000000;
  team.qualify = false;
  teams.push(team)
}

function deleteOne(id){
  id = parseInt(id);
  // find the index of the team
  const idx = teams.findIndex(team => team.id === id);
  teams.splice(idx, 1);
}

function getOne(id){
  id = parseInt(id);
  return teams.find(team => team.id === id);
}

function getAll() {
  return teams;
}