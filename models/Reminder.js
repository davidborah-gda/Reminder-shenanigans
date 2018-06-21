
//templates for objects
const chalk = require('chalk');
const moment = require('moment');
const { dateFormat } = require('../config');

class Reminder {
    constructor(inputText, inputDueDate){
        this.text = inputText;
        this.dueDate = moment(inputDueDate);
    }

    toString(){
        const dueLabel = chalk.bgGreen.black("Due");
        return `-     ${chalk.green(this.text)}           ${dueLabel} ${chalk.red(this.dueDate.format(dateFormat))}`;
    }

    toFileString(){
        return `${this.text}|${this.dueDate.format(dateFormat)}`;
    }
    
}

module.exports = Reminder;
