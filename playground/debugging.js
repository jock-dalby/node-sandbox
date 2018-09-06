const person = {
  name: 'Jock'
}

person.age = 25;
person.name = 'Mike'


// run 'node inspect playground/debugging.js' to run in debug mode
// when running and see debug> in terminal, run list(10) prints 10 lines above
// and below.

// Can also run using nodemon and/or arguements e.g. nodemon inspect app.js read --title=Shopping --body="carrots, apples, pears"

// run 'n' command to take you to next line of code. At beginning will start on wrapper function
// that all node code is wrapped in. Running 'n' will then run the next block of code.

// Using the 'c' command will continue on until the program completes. If want to access a particular line in the app,
// add the 'debugger;' keyword at the place you want to break, start debug mode and hit 'c', this will continue
// until it hits the breakpoint or the app completes.

// Use 'repl' command to enter repl debug mode. While in repl mode we can type 'person; and the
// person object will be printed in console as it is at that time. Example would be to start debug mode,
// use 'n' command a couple of times until get to 'person.name = 'Mike'' line. When on this line
// it has not yet been executed, so enter repl mode and run 'person' and will see person object
// with name still as 'Jock'. Can also run any JS code in here, e.g. person.age + 125 will print 150

// cntl + c twice will close the debug mode
console.log(person);