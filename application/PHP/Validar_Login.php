<?php

include('ConexaoPostgree.php');

try {

if(empty($_POST['user'])){
  throw new Exception("Por favor preencha o campo do Usuário");
}

if(empty($_POST['senha'])){
  throw new Exception("Por favor preencha o campo da Senha");
}
  // as variáveis login e senha recebem os dados digitados na página anterior
  $login = $_POST['user'];
  $senha = $_POST['senha'];

  $connect = new Conexao();

  // as próximas 3 linhas são responsáveis em se conectar com o bando de dados.
  if (!$connect->con){
    die("Sem acesso ao DB, Entre em contato com o Administrador, leonardosabinoti@gmail.com");
  }

  // A variavel $result pega as varias $login e $senha, faz uma
  //pesquisa na tabela de usuarios

  $result = $connect->con->query("select * from usuarios where email_Usuario = '$login' and senha_Usuario = '$senha'");

  if($result->rowCount() < 1){
    throw new Exception("Login ou Senha inválido");
  }

  // session_start inicia a sessão
  session_start();
  // session_destroy();
  $dados_usuario = $result->fetch(PDO::FETCH_ASSOC);
  unset($dados_usuario['senha_usuario']);
  $_SESSION['dados_usuarios'] = $dados_usuario;
  echo json_encode([
    'success'=>true,
    'message'=> "Logado com sucesso!",
  ]);


} catch (\Exception $e) {
  echo json_encode([
    'success'=>false,
    'message'=>$e->getMessage()
  ]);
}
