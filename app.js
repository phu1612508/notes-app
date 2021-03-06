const chalk = require('chalk');
const yargs = require('yargs');
const notes = require("./notes.js");

yargs.command({
    command: "add",
    describe: "add a note",
    builder: {
        title: {
            desc: "Note title"
        },
        body: {
            desc: "body",
            demandOption: true,
            type: "String"
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: "remove",
    describe: "remove a note",
    builder: {
        title: {
            desc: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title);
    }
});

yargs.command({
    command: "list",
    describe: "list notes",
    handler() {
        notes.listNotes();
    }
});

yargs.command({
    command: "read",
    describe: "read a note",
    builder: {
        title: {
            desc: "Note title",
            demandOption: true,
            type: "string"
        }

    },
    handler(argv) {
        notes.readNotes(argv.title);
    }
});
console.log(yargs.argv);