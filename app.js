console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')
const argv = yargs.argv;

// NOTE: this is an array of all the command line arguments passed in when starting the app
console.log('e.g. node app.js list',  '===> process.argv', process.argv);
/*
[ '/usr/local/bin/node', // Refers to node command
  '/Users/jock/Desktop/node-sandbox/app.js', // refers to app.js
  'list' ] // Refers to list command
 */

 // **YARGS MAKES THE PROCESS OF PARSING COMMAND LINE ARGUMENTS MUCH MUCH EASIER**
 // This is argv we can access when using 3rd party module, yargs
 console.log('e.g. node app.js list --title=secrets',  '===> argv', argv);
/*
 * { _: [ 'list' ], title: 'secrets', '$0': 'app.js' }
 */

var command = argv._[0];
console.log('Command: ', command);

if (command === 'add') {
  const noteCreated = notes.addNote(argv.title, argv.body);
  console.log(noteCreated ? `Note added: Title: ${noteCreated.title}, Body: ${noteCreated.body}` : 'Note title already in use');
} else if (command === 'remove') {
  console.log(notes.removeNote(argv.title) ? `Note ${argv.title} has been removed` : `Could not find note with title ${argv.title}`);
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else {
  console.log('Command not recognised');
}
