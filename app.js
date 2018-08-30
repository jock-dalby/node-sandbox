console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js')

// this is an array of all the command line arguments passed in when starting the app
console.log('e.g. node app.js list',  '===> ', process.argv);
/*
[ '/usr/local/bin/node', // Refers to node command
  '/Users/jock/Desktop/node-sandbox/app.js', // refers to app.js
  'list' ] // Refers to list command
 */

var command = process.argv[2];
console.log('Command: ', command);

if (command === 'add') {
  console.log('Adding new note');
} else if (command === 'remove') {
  console.log('Removing note');
} else if (command === 'list') {
  console.log('Listing all notes');
} else if (command === 'read') {
  console.log('Reading note');
} else {
  console.log('Command not recognised');
}
