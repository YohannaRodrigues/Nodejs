// Fazer as importaçoes usando o required que é um pouco mais antiga que o import
// nome do modulo é o mesmo da variavel

const fs = require("fs");

// O arquivo que você quer ler, o padrão da lingua e uma função anonima que você pode receber o erro ou os dados
fs.readFile("arquivo.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
