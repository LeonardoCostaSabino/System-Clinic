<?php


include('../PHP/ConexaoPostgree.php');

$minhaConexao = new Conexao();

$query = "select * from usuarios WHERE nick_Usuario = 'BUTU'";
$result = $minhaConexao->con->query($query);
  if($result){
    $dados[] = $result->fetch();
  }

?>
