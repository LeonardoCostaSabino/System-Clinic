<?php

include ('../Model/Class:Configuracoes.php');

$config = New Configuracoes;

try {

$Parametros=$_POST['action'];

switch ($Parametros){

  case "Login":
    $config->Login();
    break;
  case "Logout":
    $config->Logout();
    echo json_encode([
    'success'=>true,
    'message'=>"Deslogado com Sucesso",
    ]);
    break;
  }
}
catch (\Exception $e) {
echo json_encode([
'success'=>false,
'message'=>$e->getMessage()
]);
}
