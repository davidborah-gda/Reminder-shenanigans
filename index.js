
const fs = require('fs'); //this tells node that we need this module (set of functions and attributes)

const reminderFile = "reminders.txt";

class ReminderList {
    constructor(filepath) {
        this.filepath = filepath;
        const lines = fs.readFileSync(reminderFile, 'utf8').split('\n');
        const parsedLines = lines.map(line => line.split("|"));
        const humanFriendlyLines = parsedLines.map(parsedLine => {
            const reminder = new Reminder(parsedLine[0], parsedLine[1]);
            return reminder;
        });
        this.reminders = humanFriendlyLines;
    }

    add(reminder) {
        this.reminders.push(reminder);
    }

    toFileOutput() {
        const fileString = this.reminders.map((reminder) => reminder.toFileString());
        const output = fileString.join('\n');
        return output;
    }

    toConsole() {
        const reminderStrings = this.reminders.map((reminder) => reminder.toString());
        const output = reminderStrings.join('\n');
        console.log(output);
    }
}

module.exports = ReminderList;
//templates for objects
class Reminder {
    constructor(inputText, inputDueDate) {
        this.text = inputText;
        this.dueDate = inputDueDate;
    }

    toString() {
        return `-     ${this.text}           Due: ${this.dueDate}`;
    }

    toFileString() {
        return `${this.text}|${this.dueDate}`;
    }

}


const args = process.argv.slice(2);
const subcommand = args[0];
if (subcommand === 'list') {
    list();
} else if (subcommand === 'add') {
    const reminder = args[1];
    add(reminder);
} else {
    help();
}

console.log("Completed your request.");
process.exit(0);


//list command, where all of the reminders are printed

function list() {
    console.log('Here are the things that you need to do...');
    const reminderList = new ReminderList(reminderFile);
    reminderList.toConsole();
}

//add command where we can add a reminder

function add(addition) {
    console.log('Adding a new reminder...');
    const reminderList = new ReminderList(reminderFile);
    const reminder = new Reminder(addition, new Date());
    reminderList.add(reminder);
    const output = reminderList.toFileOutput();
    fs.unlinkSync(reminderFile);
    fs.appendFileSync(reminderFile, output);
}

function help() {
    console.log('Please check your command syntax');
}
