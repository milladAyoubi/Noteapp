
const c = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');




yargs.version('1.1.0');

// Add Command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'

        },


        title: {
            describe: 'Note Data',
            demandOption: true,
            type: 'string'

        },

        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function (argv) {  
       notes.addNote(argv.title,argv.body);
}

});


// Remove Command 
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',

    handler: function (argv) {
     
        notes.removeNotes(argv.title);
    }
});

//List Command
yargs.command ({
    command:'list',
    describe: 'list your notes',
    handler: function() {
 
       console.log(c.green('Listing all notes!!'));
       console.log(notes.listNotes());
    }
});

//Read Command 
yargs.command ({    
    command:'read',
    describe:'reading a note!',
    handler: function(argv) {
        console.log(c.greenBright('Reading a note!'));
        notes.readNote(argv.title);
    }
});

//Read Command 
yargs.command ({    
    command:'check',
    describe:'Checking the note',
    handler: function(argv) {
        console.log(c.greenBright('Checking If Note Exists!'));
    notes.checkNotes(argv.title);
    }
});
yargs.parse();