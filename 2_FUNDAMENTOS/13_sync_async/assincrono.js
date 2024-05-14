const fs = require("fs");

console.log("Início");

fs.writeFile("arquivo.txt", "Oi", function (err) {
  setTimeout(function () {
    console.log("Arquivo criado!");
  }, 1000);
});

console.log("Fim");

//assincrono não espera a função ser executada para terminar de rodar o codigo
