<?php

$Nick = $_POST["Nick_Usuario"];
$Nome = $_POST["Nome_Usuario"];
$Email = $_POST["Email_Usuario"];
$Senha = $_POST["Senha_Usuario"];

$minhaConexao = New Conexao();

$sql = "insert into usuarios (cpf_Paciente, nm_Paciente, email_usuario, senha_usuario) values (:Nick, :Nome, :Email, :Senha)";
$insert = $minhaConexao->con->prepare($sql);
$insert->execute(array(
  ':Nick' => $Nick,
  ':Nome' => $Nome,
  ':Email' => $Email,
  ':Senha' => $Senha
));



?>
