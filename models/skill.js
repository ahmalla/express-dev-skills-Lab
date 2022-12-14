const skills = [
    {id: 112233, skill: 'CSS', done: true},
    {id: 113344, skill: 'HTML', done: false},
    {id: 114455, skill: 'Javascript', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }
  
 function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.done = false;
  skills.push(skill);
 }

 function deleteOne(id) {
  id = parseInt(id);

  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
 }