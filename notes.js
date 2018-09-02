console.log('Starting notes.js');

const addNote = (title, body) => {
  console.log('Adding note', title, body);
}

const getNote = title => {
  console.log('Getting note', title);
}

const getAll = () => {
  console.log('Getting all notes');
}

const removeNote = title => {
  console.log('Removing note', title);
}

module.exports = {
  addNote,
  getNote,
  removeNote,
  getAll,
}