console.log('Starting notes.js');

// console.log(module);

module.exports.age = 25;

module.exports.addNote = () => {
  console.log('add note');
  return 'You are awesome!';
}

module.exports.add = (a, b) => a + b;