console.log('Starting notes.js');
const fs = require('fs');

const addNote = (title, body) => {

  let notes = [];

  try {
    // Try to get existing notes from file if it exists
    notes = JSON.parse(fs.readFileSync('notes-data.json'));
  } catch (e) {
    // If the file doesn't exist or the JSON file has invalid data and it fails
    // the stop an error being thrown
  }

  const duplicateNotes = notes.filter(note => note.title === title);
  // If a note with the same title does not already exist
  if (duplicateNotes.length === 0) {
    // create new note
    const note = { title, body };
    // Add new note to existing notes
    notes = [...notes, note];
    // Save all notes
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }
}

const getNote = title => {
  // Get existing notes
  const notes = JSON.parse(fs.readFileSync('notes-data.json'));
  // Find the note with matching title
  const requestedNote = notes.find(note => note.title === title);
  // Log requested note
  console.log('Here is your note ==>', requestedNote);
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