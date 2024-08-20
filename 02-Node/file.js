const fs = require("fs");

//can use the fs module to interact with files

//synchronous call
// fs.writeFileSync("./text.txt", "Hello World");

//async call
// fs.writeFile("./text.txt", "Hello World Async", (err) => {});

//To read the contacts.txt file
// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);

//async doesnt return anything and always expects a callback function
// fs.readFile("contacts.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log("There is an error");
//   } else {
//     console.log(result);
//   }
// });

//to append things in the file
fs.appendFileSync("./text.txt", `${Date.now()}Hey there\n`);
