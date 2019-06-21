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
    unset($_SESSION['login']);
    unset($_SESSION['senha']);
    header('Location:../../Paginas/login.php');
  }


}



?>
