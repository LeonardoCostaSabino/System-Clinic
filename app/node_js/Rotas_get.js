"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var route = express_1.default.Router();
route.get("/", function (req, res) {
    res.send("Pagina Home");
});
route.get("/Paciente", function (req, res) {
    res.send("Pagina Pacientes");
});
route.get("/Funcionario", function (req, res) {
    res.send("Pagina Funcionários");
});
route.get("/Consulta", function (req, res) {
    res.send("Pagina Consulta");
});
route.get("/Prontuario", function (req, res) {
    res.send("Pagina Prontuario");
});
route.get("/Permissao", function (req, res) {
    res.send("Pagina Permissão");
});
route.get("/Dicom", function (req, res) {
    res.send("Pagina Dicom");
});
route.get("/Agendamento", function (req, res) {
    res.send("Pagina Agend");
});
route.get("/Clinicas", function (req, res) {
    res.send("Pagina Clinicas");
});
route.get("/Pdf", function (req, res) {
    res.send("Pagina Pdf");
});
module.exports = route;
//# sourceMappingURL=Rotas_get.js.map