const fs = require('fs');//this tells node that we need this module (set of fnctions and attributes)
console.log("Welcome to remindme");

const reminderFile = "reminders.txt";

//This is to wipe or delete the text file between each reminder session
fs.unlinkSync(reminderFile);

const reminders = [
    "get some milk", //0
    "work out", //1
    "get groceries", //2
    "groom the dog", //3
    "take a nap" //4
];
//Adding an array for dates to match the reminder subject/body
const dates = [  
    new Date(),
    new Date(),
    new Date(),
    new Date(),
    new Date()
];

//for loop 
for(let i = 0; i < reminders.length; i += 1){
    const reminder = reminders[i];
    const date = dates[i];
    const line = `${reminder}|${date}\n`;
    fs.appendFileSync(reminderFile, line);
}

fs.writeFileSync(reminderFile, reminders);
console.log("Wrote all of the reminders to the file");
//End of the progam