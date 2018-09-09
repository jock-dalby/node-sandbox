const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')
const argv = yargs.argv;

// NOTE: this is an array of all the command line arguments passed in when starting the app
// console.log('e.g. node app.js list',  '===> process.argv', process.argv);
/*
[ '/usr/local/bin/node', // Refers to node command
  '/Users/jock/Desktop/node-sandbox/app.js', // refers to app.js
  'list' ] // Refers to list command
 */

 // **YARGS MAKES THE PROCESS OF PARSING COMMAND LINE ARGUMENTS MUCH MUCH EASIER**
 // This is argv we can access when using 3rd party module, yargs
//  console.log('e.g. node app.js list --title=secrets',  '===> argv', argv);
/*
 * { _: [ 'list' ], title: 'secrets', '$0': 'app.js' }
 */

var command = argv._[0];

if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created!');
    notes.logNote(note);
  } else {
    `Note with title '${argv.title}' already in use`
  }
} else if (command === 'remove') {
  const removedNote = notes.removeNote(argv.title);
  if (removedNote) {
    console.log('Note removed!');
    notes.logNote(removedNote);
  } else {
    `Could not find note with title '${argv.title}'`
  }
} else if (command === 'list') {
  const allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} notes `);
  allNotes.forEach(notes.logNote);
} else if (command === 'read') {
  const note = notes.getNote(argv.title);
  console.log( note ? notes.logNote(note) : `Note with title: '${argv.title}' not found`);
} else {
  console.log('Command not recognised');
}
