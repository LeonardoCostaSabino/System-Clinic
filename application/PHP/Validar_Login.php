<?php

include('ConexaoPostgree.php');
// session_start inicia a sessão
session_start();
// as variáveis login e senha recebem os dados digitados na página anterior
$login = $_POST['user'];
$senha = $_POST['senha'];
$Lembra = $_POST['lembrar'];

$connect = new Conexao();

// as próximas 3 linhas são responsáveis em se conectar com o bando de dados.
if (!$connect->con){
  die("Sem acesso ao DB, Entre em contato com o Administrador, leonardosabinoti@gmail.com");
}

// A variavel $result pega as varias $login e $senha, faz uma
//pesquisa na tabela de usuarios

$result = $connect->con->query("select * from usuarios where email_Usuario = '$login' and senha_Usuario = '$senha'");

if($result->rowCount()>0){
  $_SESSION['login'] = $login;
  $_SESSION['senha'] = $senha;
  if ($lembrar){
    setcookie("Email-User","$senha");
    setcookie("Senha-User","$login");
  }
  header('Location:../../Paginas/index.php');
}
else{
  unset ($_SESSION['login']);
  unset ($_SESSION['senha']);
  header('Location:../../Paginas/login.php');
}
?>
