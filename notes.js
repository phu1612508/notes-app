const fs = require("fs");
const chalk = require("chalk");

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
        console.log(chalk.green.inverse("New note was added!"));
    } else {
        console.log(chalk.red.inverse("Note already exist"));
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

const removeNotes = function (title) {
    const notes = loadNotes();
    const newNotes = notes.filter(function (note) {
        return note.title !== title;
    });
    if (notes.length === newNotes.length) {
        console.log(chalk.red.inverse("No note found"));
    } else {
        saveNotes(newNotes);
        console.log(chalk.green.inverse("Note removed"));
    }
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes
};