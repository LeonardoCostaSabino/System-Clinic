<?php

class Config
{

  function __construct()
  {

  }

  function url(){
    return $_SERVER['SERVER_PROTOCOL'].$_SERVER['SERVER_NAME'];
  }

  function Logout(){
    session_start();
    session_destroy();
    header('Location: ../View/Login.php');
    exit();
  }

  function seguranca(){
    session_start();
    if(empty($_SESSION['dados_usuarios'])){
    header("Location: ../../View/Login.php");
    exit;
    }

  }


}



?>
