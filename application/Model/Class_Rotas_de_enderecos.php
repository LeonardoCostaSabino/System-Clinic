<?php

Class Rotas {

  function __construct(){

  }

  function rota_home(){
    include ('../View/Dependencias_Pages/title_Padrao.php');
    include ('../View/Dependencias_Pages/menu_Padrao.php');
    include ('../View/System_Administer.html');
    include ('../View/Dependencias_Pages/rodape_Padrao.php');
  }

  function rota_Paciente(){
    include ('../View/Dependencias_Pages/title_Padrao.php');
    include ('../View/Dependencias_Pages/depedencias_Pacientes.php');
    include ('../View/Dependencias_Pages/menu_Padrao.php');
    include ('../View/Paciente.html');
    include ('../View/Dependencias_Pages/rodape_Padrao.php');

  }

  function rota_Funcionario(){
    include ('../View/Dependencias_Pages/title_Padrao.php');
    include ('../View/Dependencias_Pages/depedencias_Funcionarios.php');
    include ('../View/Dependencias_Pages/menu_Padrao.php');
    include ('../View/Funcionario.html');
    include ('../View/Dependencias_Pages/rodape_Padrao.php');

  }

  function rota_consult(){
    include ('../View/Dependencias_Pages/title_Padrao.php');
    include ('../View/Dependencias_Pages/depedencias_Consult.php');
    include ('../View/Dependencias_Pages/menu_Padrao.php');
    include ('../View/Consult_Dados.html');
    include ('../View/Dependencias_Pages/rodape_Padrao.php');

  }

  function rota_Prontuario(){
    include ('../View/Dependencias_Pages/title_Padrao.php');
    include ('../View/Dependencias_Pages/depedencias_Prontuario.php');
    include ('../View/Dependencias_Pages/menu_Padrao.php');
    include ('../View/Prontuario.html');
    include ('../View/Dependencias_Pages/rodape_Padrao.php');

  }

  function rota_Permissao(){
    include ('../View/Dependencias_Pages/title_Padrao.php');
    include ('../View/Dependencias_Pages/depedencias_Pacientes.php');
    include ('../View/Dependencias_Pages/menu_Padrao.php');
    include ('../View/Paciente.html');
    include ('../View/Dependencias_Pages/rodape_Padrao.php');
  }

  function rota_Dicom(){
    include ('../View/Dependencias_Pages/title_Padrao.php');
    include ('../View/Dependencias_Pages/depedencias_Dicom.php');
    include ('../View/Dependencias_Pages/menu_Padrao.php');
    include ('../View/Upload_Dicom.html');
    include ('../View/Dependencias_Pages/rodape_Padrao.php');
  }

  function rota_agendamento(){
    include ('../View/Dependencias_Pages/title_Padrao.php');
    include ('../View/Dependencias_Pages/depedencias_Agendamento.php');
    include ('../View/Dependencias_Pages/menu_Padrao.php');
    include ('../View/Agedamento_Calendar.html');
    include ('../View/Dependencias_Pages/rodape_Padrao.php');
  }

  function rota_clinicas(){
    include ('../View/Dependencias_Pages/title_Padrao.php');
    include ('../View/Dependencias_Pages/depedencias_Consult.php');
    include ('../View/Dependencias_Pages/menu_Padrao.php');
    include ('../View/Consult_Dados.html');
    include ('../View/Dependencias_Pages/rodape_Padrao.php');
  }

  function rota_login(){
    include('../View/Login.html');
  }
}
