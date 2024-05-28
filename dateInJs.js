let myDate = new Date();

console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toString());
console.log(myDate.toTimeString());
console.log(typeof myDate);

let createdDate = new Date(2024,4,19);
console.log(createdDate);

let date2 = new Date(2024,3,5,5,7);
console.log(date2);

let date3 = new Date("2024-03-23");
console.log(date3);

let timeStamp = Date.now();
console.log(timeStamp);

console.log(Math.floor(timeStamp/1000));
console.log(Math.floor(createdDate/1000));
console.log(Math.floor(date3/1000));

