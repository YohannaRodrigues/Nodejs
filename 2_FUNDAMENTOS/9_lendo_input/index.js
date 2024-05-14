const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Qual a sua linguagem preferida? `, (language) => {
  if (language === "Node.js") {
    console.log(`É a minha linguagem preferida tambem s2`);
  } else {
    console.log(`A sua linguagem preferida é: ${language}`);
  }

  readline.close();
});
