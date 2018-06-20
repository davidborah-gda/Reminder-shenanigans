
//templates for objects
const chalk = require('chalk');
class Reminder {
    constructor(inputText, inputDueDate){
        this.text = inputText;
        this.dueDate = inputDueDate;
    }

    toString(){
        const dueLabel = chalk.bgGreen.black("Due");
        return `-     ${chalk.green(this.text)}           ${dueLabel} ${chalk.red(this.dueDate)}`;
    }

    toFileString(){
        return `${this.text}|${this.dueDate}`;
    }
    
}

module.exports = Reminder;
