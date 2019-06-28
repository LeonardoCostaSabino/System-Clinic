<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>System Clinic </title>

    <!-- Bootstrap -->
    <link href="../vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="../vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->
    <link href="../vendors/nprogress/nprogress.css" rel="stylesheet">
    <!-- Bootstrap -->
    <link href="../vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="../vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <!-- bootstrap-wysiwyg -->
    <link href="../vendors/google-code-prettify/bin/prettify.min.css" rel="stylesheet">
    <!-- Select2 -->
    <link href="../vendors/select2/dist/css/select2.min.css" rel="stylesheet">
    <!-- Switchery -->
    <link href="../vendors/switchery/dist/switchery.min.css" rel="stylesheet">
    <!-- IChecker -->
    <link href="../vendors/icheck-1.x/skins/square/red.css" rel="stylesheet">
    <!-- rangeSlider -->
    <link href="../vendors/ion.rangeSlider/css/ion.rangeSlider.css" rel="stylesheet">
    <link href="../vendors/ion.rangeSlider/css/ion.rangeSlider.skinNice.css" rel="stylesheet">
    <!-- fullcalendar -->
    <link href="../vendors/fullcalendar/dist/fullcalendar.min.css" rel="stylesheet">
    <link href="../vendors/fullcalendar/dist/fullcalendar.print.css" rel="stylesheet" media="print">
    <!-- Dropzone.js -->
    <link href="../vendors/dropzone/dist/min/dropzone.min.css" rel="stylesheet">
    <link href="//cdnjs.cloudflare.com/ajax/libs/jquery-form-validator/2.3.26/theme-default.min.css">


    <!-- Custom Theme Style -->
    <link href="../Css/Admin_System.css" rel="stylesheet">
  </head>

  <body class="nav-md">
    <div class="container body">
      <div class="main_container">
        <div class="col-md-3 left_col">
          <div class="left_col scroll-view">
            <div class="navbar nav_title" style="border: 0;">
              <a href="" class="site_title"><i class="fa fa-user-md"></i> <span>System Clinic</span></a>
            </div>

    <div class="clearfix"></div>

    <!-- menu profile quick info -->
    <div class="profile clearfix">
      <div class="profile_pic">
        <img src="../Imagens/Formulários/img.jpg" alt="..." class="img-circle profile_img">
      </div>
      <div class="profile_info">
        <span>Bem vindo,</span>
        <h2 id="Prof" >Vai Ser AJAX</h2>
      </div>
    </div>
    <!-- /menu profile quick info -->

    <br />

    <!-- sidebar menu -->
    <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
      <div class="menu_section">
        <h3>General</h3>
        <ul class="nav side-menu">
          <li><a href="System_Administer.php"><i class="fa fa-home"></i> Home</a>
          </li>
          <li><a><i class="fa fa-edit"></i> Nome <span class="fa fa-chevron-down"></span></a>
            <ul class="nav child_menu">
              <li><a href="Paciente.php"><i class="fa fa-child" aria-hidden="true"></i>Pacientes</a></li>
              <li><a><i class="fa fa-book"></i>Consultas</a>
                  <ul class="nav child_menu">
                    <li><a href="Agendamento_Consulta.php"><i class="fa fa-calendar-check-o"></i>Agendamento de consultas</a>
                    <li><a href="Agendamento_Calendar.php"><i class="fa fa-calendar"></i>Visualizar consultas</a>
                  </ul>
              </li>
              <li><a href="Funcionario.php"><i class="fa fa-user"></i>Funcionários</a></li>
              <li><a href="Prontuario.php"><i class="fa fa-file-o"></i>Prontuário</a></li>
              <li><a href="Clinicas.php"><i class="fa fa-hospital-o"></i>Clinicas</a></li>
              <li><a href="Dicom.php"><i class="fa fa-camera-retro"></i>Dicom</a></li>
            </ul>
          </li>
          <li><a><i class="fa fa-file-text-o"></i> Relatórios <span class="fa fa-chevron-down"></span></a>
            <ul class="nav child_menu">
              <li><a>Relatório.PDF</a></li>
              <li><a>Relatório.PDF</a></li>
            </ul>
          </li>
          <li><a><i class="fa fa-globe"></i> Funções Adicionais <span class="fa fa-chevron-down"></span></a>
            <ul class="nav child_menu">
              <li><a>N.E</a></li>
              <li><a>N.E</a></li>
              <li><a>N.E</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="menu_section">
        <h3>Config</h3>
        <ul class="nav side-menu">
          <li><a><i class="fa fa-bug"></i> Genrenciamento <span class="fa fa-chevron-down"></span></a>
            <ul class="nav child_menu">
              <li><a href="Consult_Dados.php">Pagina de Agendamento</a></li>
              <li><a href="Admin_Permissao.php">Modificação de Permissões</a></li>
              <li><a href="Biográfia.html">Sobre nós</a></li>
            </ul>
          </li>
      </div>
    </div>
    <!-- /sidebar menu -->

    <!-- /menu footer buttons -->
    <div class="sidebar-footer hidden-small">
      <a data-toggle="tooltip" data-placement="top" title="Settings">
        <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
      </a>
      <a data-toggle="tooltip" data-placement="top" title="FullScreen">
        <span class="glyphicon glyphicon-fullscreen" onclick="toggleFullScreen()" aria-hidden="true"></span>
      </a>
      <a data-toggle="tooltip" data-placement="top" title="Lock">
        <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
      </a>
      <a data-toggle="tooltip" data-placement="top" title="Logout" href="../PHP/Logout.php">
        <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
      </a>
    </div>
    <!-- /menu footer buttons -->
  </div>
</div>
<!-- top navigation -->
<div class="top_nav">
  <div class="nav_menu">
    <nav>
      <div class="nav toggle">
        <a id="menu_toggle"><i class="fa fa-bars"></i></a>
      </div>

      <ul class="nav navbar-nav navbar-right">
        <li class="">
          <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
            <img src="../Imagens/Formulários/img.jpg" alt=""> Vai ser Ajax
            <span class=" fa fa-angle-down"></span>
          </a>
          <ul class="dropdown-menu dropdown-usermenu pull-right">
            <li><a href="">Perfil</a></li>
            <li><a onclick="HelpModal()" class="fa fa-info-circle" > Ajuda</a></li>
            <li><a href="../PHP/Logout.php" class="fa fa-sign-out pull-right"></i> Sair</a></li>
          </ul>
        </li>
        <li role="presentation" class="dropdown">
          <a href="javascript:;" class="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
            <i class="fa fa-envelope-o"></i>
            <span class="badge bg-green">6</span>
          </a>
          <ul id="menu1" class="dropdown-menu list-unstyled msg_list" role="menu">
            <li>
              <a>
                <span class="image"><img src="../Imagens/Formulários/img.jpg" alt="Profile Image" /></span>
                <span>
                  <span>Caro Usuário</span>
                  <span class="time">3 mins Atrás</span>
                </span>
                <span class="message">
                  Voce possui um consulta marcada para o dia 17/05/2019
                </span>
              </a>
            </li>
            <li>
              <div class="text-center">
                <a>
                  <strong>See All Alerts</strong>
                  <i class="fa fa-angle-right"></i>
                </a>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</div>

<!-- /top navigation -->
