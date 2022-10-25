const skills = [
    {id: 112233, skill: 'CSS', done: true},
    {id: 113344, skill: 'HTML', done: false},
    {id: 114455, skill: 'Javascript', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }
  
 