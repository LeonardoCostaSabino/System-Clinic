import express from "express";
import { Client } from "pg";

const PORT = process.env.PORT || 3000;

const client = new Client({
  password: "postgres",
  user: "postgres",
  host: "postgres",
});

const app = express();

app.get("/ping", async (req, res) => {
  const database = await client.query("SELECT 1 + 1").then(() => "up").catch(() => "down");

  res.send({
    environment: process.env.NODE_ENV,
    database,
  });
});

(async () => {
  await client.connect();

  app.listen(PORT, () => {
    console.log("Started at http://localhost:%d", PORT);
  });
})();

// Variaveis de Teste
var n = "Leo";
var s = "Sabino";
var o = 5;
var i = 7;
//Rotas diferentes
// app.get("/", function(req, res){
//   res.send("Ola Mundo");
// });

// app.get("/sobre", function(req, res){
//
//   res.sendFile(__dirname + "/index.html");
//
// });

// app.get("/System", function(req, res){
//
//   res.send("Novas Tentativa");
//
// });

// app.get("/leo/:nome/:Sorte", function(req, res){
//   res.send("Ola"+ " " +req.params.nome);
// });

//Criação do Servidor sempre o ultimo
// app.listen(3000, function(){
//
//   console.log("O servidor está rodando na porta 3000");
//   console.log("Para Fechar o servidor pressione Ctrl + C");
//
// });
