const fs = require('fs');

const fetchNotes = () => {
  try {
    // Try to get existing notes from file if it exists
    return JSON.parse(fs.readFileSync('notes-data.json'));
  } catch (e) {
    // If the file doesn't exist or the JSON file has invalid data and it fails
    // the stop an error being thrown
    return [];
  }
}

const saveNotes = notes => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

const addNote = (title, body) => {

  const notes = fetchNotes();
  const duplicateNotes = notes.filter(note => note.title === title);

  // If a note with the same title does not already exist, add note
  if (duplicateNotes.length === 0) {
    const note = { title, body }
    saveNotes([...notes, note])
    return note;
  }
}

const getNote = title => {
  const notes = fetchNotes();
  const requestedNote = notes.find(note => note.title === title);
  return requestedNote;
}

const getAll = () => {
  return fetchNotes();
}

const removeNote = title => {
  let notes = fetchNotes();
  const filteredNotes = notes.filter(note => note.title !== title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
}

const logNote = note => {
  console.log('---');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

module.exports = {
  addNote,
  getNote,
  removeNote,
  getAll,
  logNote,
}