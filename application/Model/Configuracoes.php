<?php

require_once ("Banco_de_dados.php");

class Configuracoes extends Banco_de_dados
{

  function __construct(){

  }

  function version(){
      return rand(1,80);
  }

  function url(){
    return "http://".$_SERVER['HTTP_HOST'] ;
  }

  function Logout(){

    session_start();
    session_destroy();
    header('Location:/?rota=Login');
    exit;
  }

  function Login(){

    $banco = New Banco_de_dados;

      if(empty($_POST['user'])){
        echo json_encode([
        'success'=> false,
        'message'=> "Por favor preencha o campo do Usuário"
      ]);
      exit;
      }

      if(empty($_POST['senha'])){
        echo json_encode([
        'success'=> false,
        'message'=> "Por favor preencha o campo da Senha"
      ]);
      exit;
      }
      // as variáveis login e senha recebem os dados digitados na página anterior
      $login = $_POST['user'];
      $senha = $_POST['senha'];

      // as próximas 3 linhas são responsáveis em se conectar com o bando de dados.
      if (!$banco->verificar_Conexao()){
        die("Sem acesso ao DB, Entre em contato com o Administrador, leonardosabinoti@gmail.com");
      }

      // A variavel $result pega as varias $login e $senha, faz uma
      //pesquisa na tabela de usuarios

      $Select = "select * from usuarios where email_Usuario = '$login' and senha_Usuario = '$senha'";

      $result = $banco->consulta($Select);

      if($result->rowCount() < 1){
        echo json_encode([
        'success'=> false,
        'message'=> "Login ou Senha inválido"
      ]);
      exit;
      }
      session_start();
      $dados_usuario = $result->fetch(PDO::FETCH_ASSOC);
      unset($dados_usuario['senha_usuario']);

      $_SESSION['dados_usuarios'] = $dados_usuario;
      echo json_encode([
        'success'=>true,
        'message'=> "Logado com sucesso!",
      ]);

  }

  function verifica_Login(){
    session_start();
    if(empty($_SESSION['dados_usuarios'])){
    header("Location: /?rota=Login");
    exit;
    }
  }

}



?>
