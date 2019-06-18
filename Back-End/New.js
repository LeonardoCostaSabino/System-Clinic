
const express = require("express");
const app = express();
// Variaveis de Teste
var sf = require("./module");
var n = "Leo";
var s = "Sabino";
var o = 5;
var i = 7;
//Rotas diferentes
app.get("/", function(req, res){
  res.send("Ola Mundo");
});

app.get("/sobre", function(req, res){

  res.sendFile(__dirname + "/index.html");

});

app.get("/System", function(req, res){

  res.send("Novas Tentativa");

});

app.get("/leo/:nome/:Sorte", function(req, res){
  res.send("Ola"+ " " +req.params.nome);
});

console.log(sf(o,i));
console.log(n + " " + s );


//Criação do Servidor sempre o ultimo
app.listen(3000, function(){

  console.log("O servidor está rodando na porta 3000");
  console.log("Para Fechar o servidor pressione Ctrl + C");

});
