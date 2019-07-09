<?php
require("../Model/Class_Rotas_de_enderecos.php");




try {

if ($_SERVER['REQUEST_METHOD'] == 'POST'){

  $parametros=$_POST['action'];

  switch ($parametros){

    case "Login":
      include("../Model/Class:Configuracoes.php");
      $config = New Configuracoes();
      $config->Login();
      break;
    default:
      $config->redirecionar($parametros);
      break;
    }
  }
}
catch (\Exception $e) {
echo json_encode([
'success'=>false,
'message'=>$e->getMessage()
]);
}


if ($_SERVER['REQUEST_METHOD'] == 'GET'){
  $parametros=!empty($_GET['action']) ? $_GET['action'] : "" ;


  $rotas = New Rotas;

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
    default:
        $rotas->rota_login();
    break;
  }

}
