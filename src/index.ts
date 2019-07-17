import express from "express";
import { Client } from "pg";

const PORT = process.env.PORT || 3000;

const client = new Client({
  password: "postgres",
  user: "postgres",
  host: "postgres",
});

const app = express();

app.use('/models', express.static(__dirname + '/Public'));

app.get("/ping", async (req, res) => {
  const database = await client.query("SELECT 1 + 1").then(() => "up").catch(() => "down");

  res.send({
    environment: process.env.NODE_ENV,
    database,
  });
});

app.get("/", function(req, res){
    res.redirect('/Login');
    res.send("Hello");
});

app.get("/Login", function(req, res){
    res.send("Pagina Login");
})

//Sub Paginas após o Home
var sys = require('./Rotas_get');

app.use('/system', sys);






(async () => {
  await client.connect();

  app.listen(PORT, () => {
    console.log("Started at http://localhost:%d", PORT);
  });
})();
