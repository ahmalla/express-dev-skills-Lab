const skills = [
    {id: 112233, skill: 'CSS', done: true},
    {id: 113344, skill: 'HTML', done: false},
    {id: 114455, skill: 'Javascript', done: false}
  ];
  
  module.exports = {
    getAll
  };
  
  function getAll() {
    return skills;
  }
 