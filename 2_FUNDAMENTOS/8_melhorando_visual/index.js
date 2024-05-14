const chalk = require("chalk");

const nota = 10;

if (nota >= 6) {
  console.log(chalk.green.bold("Parabéns, você passou!"));
} else {
  console.log(chalk.bgRed.black("Você precisa fazer a prova de recuperação!"));
}
