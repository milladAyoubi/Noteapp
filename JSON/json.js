
const fs = require('fs');
/*const book = {
    title: 'Meditations',
    author: 'Marcus Aurelius'
}

const book1 = JSON.stringify(book);

const p = JSON.parse(book1);

fs.writeFileSync('1-json.json',book1) */

/* const dBuff = fs.readFileSync('1-json.json');
const dJ = dBuff.toString();
const data = JSON.parse(dJ);

console.log(data.author + 'Ha'); */


const dBuff2 = fs.readFileSync('info.json');
const dJ2 = dBuff2.toString();
const user = JSON.parse(dJ2);

user.name = 'Millad'
user.age = 20

const userJSON = JSON.stringify(user);
fs.writeFileSync('info.json',userJSON);


