const fs = require('fs')
const c = require('chalk');
const getNotes = function () {
    return 'Your notes...'
}

const addNote = function (title,body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    const duplicateNote = notes.find((note) => note.title === title) 

    if (!duplicateNote) {
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(c.blue('New note added!'))
    }
    
    
}


else {
        console.log(c.redBright('Note title Already Exists Sharmuta!'))
    }

}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }
}
const removeNotes =  (title) => {
 
    const notes = loadNotes()
    const findNote = notes.filter(function (note) {
        return note.title !== title
    })

   if (notes.length > findNote.length) {
       console.log("Note removed!");
   }
   else {
       console.log("Note Does Not Exist!");
   }

    saveNotes(findNote)
}






const checkNotes = function (title) {
    try {
        const notes = loadNotes()
        const duplicateNotes = notes.filter( (note) => {
        if(note.title === title ) {
            console.log('Note Exists');
            console.log(note);
        }
        
        })
    }
     catch (e) {
        return []
    }
}


const listNotes = function () {
   

       const notes = loadNotes();

     return notes.forEach((note) => {
           console.log(`Note Title: ${note.title} Body:${note.body}`)
       });

  
      
  
}



const readNote = (title) => {
    const notes = loadNotes();

    const read = notes.find((note) => (note.title == title))


       if (read) {
       console.log("Title: " + read.title + "\n Body: " + read.body);
       }
       else {
           console.log("Not Found")
       }

      
}



module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes,
    loadNotes: loadNotes,
    checkNotes: checkNotes,
    listNotes: listNotes,
    readNote: readNote
    
}

