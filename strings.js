let myName = "Ashok Sharma";
let repoCount = 50;

console.log(`My name is ${myName.toUpperCase()} and my repo is ${repoCount}`);

console.log(myName[0]);
console.log(myName.length);
console.log(myName.indexOf("Sharma"));

let gameName = new String('ashokgaming');
console.log(gameName);

console.log(gameName.charAt(4));
console.log(gameName.indexOf('n'));

let newString = gameName.substring(0,4);
console.log(newString);

let anotherString = gameName.slice(3,6);
console.log(anotherString);

let trimString = "    ashok    ";
console.log(trimString.trim());

let url = "http://ashok.com/%20sharma";
console.log(url.replace('%20','-'));

console.log(gameName.split('-'));

