const fs = require("fs");

const getNotes = function () {
    return 'Your note ...';
}

const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNote = notes.filter(function (note) {
        return note.title === title;
    });
    if (duplicateNote.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log("New note be added!");
    } else {
        console.log("Note already exitst");
    }




}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
};