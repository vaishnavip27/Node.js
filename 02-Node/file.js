const fs = require("fs");
const os = require("os");

//gives you an ouput 8, that means the maximum thread size is 8
console.log(os.cpus().length);

// can use the fs module to interact with files

// synchronous call(Blocing req)
fs.writeFileSync("./text.txt", "Hello World");

// async call(Non-blocking req)
fs.writeFile("./text.txt", "Hello World Async", (err) => {});

// To read the contacts.txt file
const result = fs.readFileSync("./contacts.txt", "utf-8");
console.log(result);

// async doesnt return anything and always expects a callback function
fs.readFile("contacts.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("There is an error");
  } else {
    console.log(result);
  }
});

// to append things in the file
fs.appendFileSync("./text.txt", `${Date.now()}Hey there\n`);

// default thread pool size
// 8core cpu
// You cant make 9 threads because of the default thread pool size, so you can use the os module.
// os gives you information about your own computer
