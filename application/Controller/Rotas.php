<?php
require("../Model/Class_Rotas_de_enderecos.php");

$rotas = New Rotas;

if ($_SERVER['REQUEST_METHOD'] == 'POST'){

  $parametros=$_POST['rota'];

  if ($parametros == "Login"){
    include("../Model/Class:Configuracoes.php");
    $config = New Configuracoes();
    $config->Login();
  }
  else{
    $rotas->rota_login();
  }
}

if ($_SERVER['REQUEST_METHOD'] == 'GET'){
  $parametros=!empty($_GET['rota']) ? $_GET['rota'] : "" ;

  switch($parametros){
  case "Login":
    $rotas->rota_login();
    break;
  case "Logout":
  include("../Model/Class:Configuracoes.php");
  $config = New Configuracoes();
  $config->Logout();
    break;
  case "Home":

   include("../Model/Class:Configuracoes.php");
    $config = New Configuracoes();
    $config->verifica_Login();
    $rotas->rota_home();
    break;
  case "Paciente":
    include("../Model/Class:Configuracoes.php");
    $config = New Configuracoes();
    $config->verifica_Login();
    $rotas->rota_Paciente();
    break;
  case "Funcionario":
    $rotas->rota_Funcionario();
    break;
  case "Prontuario":
    $rotas->rota_Prontuario();
    break;
  case "Clinicas":
    $rotas->rota_clinicas();
    break;
  case "Dicom":
    $rotas->rota_Dicom();
    break;
  case "Agendamento":
    $rotas->rota_agendamento();
    break;
  case "Visualizar_con":
    $rotas->rota_consult();
    break;
  case "Permisssao":
    $rotas->rota_Permissao();
    break;
  case "pdf1":
    $rotas->rota_pdf1();
    break;
  case "pdf2":
    $rotas->rota_pdf2();
    break;
  case "Agendamento_con":
    $rotas->rota_agendamento_con();
    break;
  default:
    $rotas->rota_login();
    break;
  }

}
