const a = 10;
const b = 5;
const fs = require("fs");

fs.readFile("texto.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data, a + b);
});
