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
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: "remove",
    describe: "remove a note",
    handler: function () {
        console.log("Removing a note");
    }
});

yargs.command({
    command: "list",
    describe: "list notes",
    handler: function () {
        console.log("List notes");
    }
});

yargs.command({
    command: "read",
    describe: "read a note",
    handler: function () {
        console.log("Read a note");
    }
});
console.log(yargs.argv);