<?php



require("../Model/Rotas_de_enderecos.php");

$rotas = New Rotas;

//

if ($_SERVER['REQUEST_METHOD'] == 'POST'){

  $parametros=$_POST['rota'];

  if ($parametros == "Login"){
    $rotas->Login();
  }
  else{
    $rotas->rota_login();
  }
}

if ($_SERVER['REQUEST_METHOD'] == 'GET'){

  $parametros=!empty($_GET['rota']) ? $_GET['rota'] : "" ;

  if ($parametros == "Login"){
    $rotas->rota_login();
  }
  else{
    $rotas->verifica_Login();
  }

  switch($parametros){
  case "Login":
    break;
  case "Logout":
    $rotas->Logout();
    break;
  case "Home":
    // $rotas->verifica_Login();
    $rotas->rota_home();
    break;
  case "Paciente":
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
    $rotas->rota_404();
    break;
  }
}
