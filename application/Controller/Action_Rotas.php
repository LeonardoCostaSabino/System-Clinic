<?php

include ('../Model/Class:Configuracoes.php');

try {

$Parametros=$_POST['rotas'];

switch ($Parametros){

  case 'variable':
    // code...
    break;

catch (\Exception $e) {
echo json_encode([
'success'=>false,
'message'=>$e->getMessage()
]);
}
