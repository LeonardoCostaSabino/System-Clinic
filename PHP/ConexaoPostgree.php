<?php

class Conexao
{
  protected $host ="new-system-postgres";
  protected $user = "sabino";
  protected $password = "123456";
  protected $dbname = "system";
  public $con;

  function __construct(){
    try
    {
      $this->con = new PDO("pgsql:host=$this->host;port=5432;dbname=$this->dbname;user=$this->user;password=$this->password");
    }
    catch (\Exception $e)
    {
      die($e->getMessage());
    }
  }

  function close(){
    $this->con = null;
  }
  function status(){
    if($this->con){
      echo "<h3>O sistema não está conectado a [$this->dbname] em [$this->host]</h3>";
      exit;
    }
    else{
      echo "<h3>O sistema está conectado à [$this->dbname] em [$this->host].</h3>";
    }
  }

}
?>
