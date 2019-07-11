<?php

include ('Configuracoes.php');

Class Rotas extends Configuracoes {

    function __construct(){

    }

    function rota_agendamento_con(){
        include ('../View/Agendamento_Consulta.php');
    }

    function rota_home(){
        include ($_SERVER["DOCUMENT_ROOT"].'/Home/title_Padrao.php');
        include ($_SERVER["DOCUMENT_ROOT"].'/Home/menu_Padrao.php');
        include ($_SERVER["DOCUMENT_ROOT"].'/Home/System_Administer.html');
        include ($_SERVER["DOCUMENT_ROOT"].'/Home/rodape_Padrao.php');
    }

    function rota_Paciente(){
        include ($_SERVER["DOCUMENT_ROOT"].'/Home/title_Padrao.php');
        include ($_SERVER["DOCUMENT_ROOT"].'/Pacientes/depedencias_Pacientes.php');
        include ($_SERVER["DOCUMENT_ROOT"].'/Home/menu_Padrao.php');
        include ($_SERVER["DOCUMENT_ROOT"].'/Pacientes/Paciente.html');
        include ($_SERVER["DOCUMENT_ROOT"].'/Home/rodape_Padrao.php');
    }

    function rota_Funcionario(){
        include ($_SERVER["DOCUMENT_ROOT"].'/Home/title_Padrao.php');
        include ($_SERVER["DOCUMENT_ROOT"].'/Funcionarios/depedencias_Funcionarios.php');
        include ($_SERVER["DOCUMENT_ROOT"].'/Home/menu_Padrao.php');
        include ($_SERVER["DOCUMENT_ROOT"].'/Funcionarios/Funcionario.html');
        include ($_SERVER["DOCUMENT_ROOT"].'/Home/rodape_Padrao.php');
    }

    function rota_consult(){
        include ($_SERVER["DOCUMENT_ROOT"].'Home/title_Padrao.php');
        include ($_SERVER["DOCUMENT_ROOT"].'Consultas/Consulta_con/depedencias_Consult.php');
        include ($_SERVER["DOCUMENT_ROOT"].'Home/menu_Padrao.php');
        include ($_SERVER["DOCUMENT_ROOT"].'Consultas/Consulta_con/Consult_Dados.html');
        include ($_SERVER["DOCUMENT_ROOT"].'Home/rodape_Padrao.php');
    }

    function rota_Prontuario(){
        include ($_SERVER["DOCUMENT_ROOT"].'/Home/title_Padrao.php');
        include ($_SERVER["DOCUMENT_ROOT"].'/Prontuario/depedencias_Prontuario.php');
        include ($_SERVER["DOCUMENT_ROOT"].'/Home/menu_Padrao.php');
        include ($_SERVER["DOCUMENT_ROOT"].'/Prontuario/Prontuario.html');
        include ($_SERVER["DOCUMENT_ROOT"].'/Home/rodape_Padrao.php');
    }
    function rota_Permissao(){
        include ($_SERVER["DOCUMENT_ROOT"].'/Home/title_Padrao.php');
        include ($_SERVER["DOCUMENT_ROOT"].'/Permisssao/depedencias_Pacientes.php');
        include ($_SERVER["DOCUMENT_ROOT"].'/Home/menu_Padrao.php');
        include ($_SERVER["DOCUMENT_ROOT"].'/Permisssao/Paciente.html');
        include ($_SERVER["DOCUMENT_ROOT"].'/Home/rodape_Padrao.php');
    }

    function rota_Dicom(){
        include ($_SERVER["DOCUMENT_ROOT"].'/Home/title_Padrao.php');
        include ($_SERVER["DOCUMENT_ROOT"].'/Dicom/depedencias_Dicom.php');
        include ($_SERVER["DOCUMENT_ROOT"].'/Home/menu_Padrao.php');
        include ($_SERVER["DOCUMENT_ROOT"].'/Dicom/Upload_Dicom.html');
        include ($_SERVER["DOCUMENT_ROOT"].'/Home/rodape_Padrao.php');
    }

    function rota_agendamento(){
        include($_SERVER["DOCUMENT_ROOT"].'/Consultas/Consulta_agenda/Header_agenda.php');
        include($_SERVER["DOCUMENT_ROOT"].'/Consultas/Consulta_agenda/Consult_agenda.html');
        include($_SERVER["DOCUMENT_ROOT"].'/Consultas/Consulta_agenda/Footer_agenda.php');
    }

    function rota_clinicas(){
        include ($_SERVER["DOCUMENT_ROOT"].'/Home/title_Padrao.php');
        include ($_SERVER["DOCUMENT_ROOT"].'/Clinicas/depedencias_Consult.php');
        include ($_SERVER["DOCUMENT_ROOT"].'/Home/menu_Padrao.php');
        include ($_SERVER["DOCUMENT_ROOT"].'/Clinicas/Consult_Dados.html');
        include ($_SERVER["DOCUMENT_ROOT"].'/Home/rodape_Padrao.php');
    }

    function rota_login(){
        include($_SERVER["DOCUMENT_ROOT"].'/Login/Cabeca_login.php');
        include($_SERVER["DOCUMENT_ROOT"].'/Login/Login_Melhorado.html');
        include($_SERVER["DOCUMENT_ROOT"].'/Login/Dependencias_login.php');
    }

    function rota_pdf1(){
        include($_SERVER["DOCUMENT_ROOT"].'/Relatorios/Pdf_Test.php');
    }

    function rota_pdf2(){
        include($_SERVER["DOCUMENT_ROOT"].'/Relatorios/Pdf_Test0.php');
    }
}
