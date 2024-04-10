const fs = require("fs");

// fs.writeFile("hello.txt", "hii", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("File successfully written.");
//   }
// });

// fs.readFile("hello.txt", "utf8", (error, data) => {
//   if (error) throw error;
//   console.log(data);
// });

fs.writeFile("welcome.txt", "welcome", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("File successfully written.");
  }
});

fs.readFile("welcome.txt", "utf8", (error, data) => {
  if (error) throw error;
  console.log(data);
});