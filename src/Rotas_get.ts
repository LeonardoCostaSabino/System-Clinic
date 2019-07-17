import express from "express";

const app = express();
const route = express.Router();

route.get("/", function(req,res){
    res.send("Pagina Home");
});

route.get("/Paciente", function(req,res){
    res.send("Pagina Pacientes");
});

route.get("/Funcionario", function(req,res){
    res.send("Pagina Funcionários");
});

route.get("/Consulta", function(req,res){
    res.send("Pagina Consulta");
});

route.get("/Prontuario", function(req,res){
    res.send("Pagina Prontuario");
});

route.get("/Permissao", function(req,res){
    res.send("Pagina Permissão");
});

route.get("/Dicom", function(req,res){
    res.send("Pagina Dicom");
});

route.get("/Agendamento", function(req,res){
    res.send("Pagina Agend");
});

route.get("/Clinicas", function(req,res){
    res.send("Pagina Clinicas");
});

route.get("/Pdf", function(req,res){
    res.send("Pagina Pdf");
});

module.exports = route;
