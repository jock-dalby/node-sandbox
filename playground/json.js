/** JSON.stringify => CONVERT JS OBJ TO JSON STRING OBJ **/
const obj = {
  name: 'Jock'
};
const stringObj = JSON.stringify(obj);
console.log('JS object =>', {obj}, 'of type ', typeof obj);
console.log('JSON object =>', {stringObj}, 'of type ', typeof stringObj);

/** JSON.parse => CONVERT JSON STRING OBJ TO JS OBJ **/
const personString = '{"name": "Jock", "age": 32}';
const jsObj = JSON.parse(personString);
console.log('JSON string =>', {personString}, 'of type ', typeof personString);
console.log('JS object =>', {jsObj}, 'of type ', typeof jsObj);

/** SAVE AND READ JSON USING FILE SYSTEM MODULE **/
const fs = require('fs');

// Create note obj
const originalNote = {
  title: 'Some title',
  body: 'Some body'
}
// Convert note obj to JSON
const originalNoteString = JSON.stringify(originalNote);
// Create new file and save note string as JSON
fs.writeFileSync('notes.json', originalNoteString);
// Get JSON string from above created file
const noteString = fs.readFileSync('notes.json');
// Convert JSON note string back to JS obj
const note = JSON.parse(noteString);
// Log out JS Obj
console.log(typeof note);
console.log('Note title', note.title);