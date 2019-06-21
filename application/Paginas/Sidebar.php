<?php
include('../PHP/ConexaoPostgree.php');
include('../PHP/Configuraçoes.php');

$config = new Config();
$minhaConexao = new Conexao();

$query = "select * from usuarios WHERE nick_Usuario = 'BUTU'";
$result = $minhaConexao->con->query($query);
if($result){
  $usuario = $result->fetch();
}

?>
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
    <link href="../Java/icheck-1.x/skins/square/red.css" rel="stylesheet">
    <!-- Custom Theme Style -->
    <link href="../Css/custom.min.css" rel="stylesheet">
    <!-- rangeSlider -->
    <link href="../vendors/ion.rangeSlider/css/ion.rangeSlider.css" rel="stylesheet">
    <link href="../vendors/ion.rangeSlider/css/ion.rangeSlider.skinNice.css" rel="stylesheet">
    <!-- Datatables -->
    <link href="../vendors/datatables.net-bs/css/dataTables.bootstrap.min.css" rel="stylesheet">
    <link href="../vendors/datatables.net-buttons-bs/css/buttons.bootstrap.min.css" rel="stylesheet">
    <link href="../vendors/datatables.net-fixedheader-bs/css/fixedHeader.bootstrap.min.css" rel="stylesheet">
    <link href="../vendors/datatables.net-responsive-bs/css/responsive.bootstrap.min.css" rel="stylesheet">
    <link href="../vendors/datatables.net-scroller-bs/css/scroller.bootstrap.min.css" rel="stylesheet">
    <!-- fullcalendar -->
    <link href="../vendors/fullcalendar/dist/fullcalendar.min.css" rel="stylesheet">
    <link href="../vendors/fullcalendar/dist/fullcalendar.print.css" rel="stylesheet" media="print">
    <!-- Dropzone.js -->
    <link href="../vendors/dropzone/dist/min/dropzone.min.css" rel="stylesheet">


    <!-- Custom Theme Style -->
    <link href="../Css/custom.min.css" rel="stylesheet">
  </head>

  <body class="nav-md">
    <div class="container body">
      <div class="main_container">
        <div class="col-md-3 left_col">
          <div class="left_col scroll-view">
            <div class="navbar nav_title" style="border: 0;">
              <a href="index.html" class="site_title"><i class="fa fa-user-md"></i> <span>System Clinic</span></a>
            </div>

    <div class="clearfix"></div>

    <!-- menu profile quick info -->
    <div class="profile clearfix">
      <div class="profile_pic">
        <img src="../Imagens/Formulários/img.jpg" alt="..." class="img-circle profile_img">
      </div>
      <div class="profile_info">
        <span>Bem vindo,</span>
        <h2 ><?php print !empty($usuario) ? $usuario['nm_usuario'] : '';?></h2>
      </div>
    </div>
    <!-- /menu profile quick info -->

    <br />

    <!-- sidebar menu -->
    <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
      <div class="menu_section">
        <h3>General</h3>
        <ul class="nav side-menu">
          <li><a href="index.php"><i class="fa fa-home"></i> Home</a>
          </li>
          <li><a><i class="fa fa-edit"></i> Formulários <span class="fa fa-chevron-down"></span></a>
            <ul class="nav child_menu">
              <li><a href="CadastroPaciente.php">Cadastro de Pacientes</a></li>
              <li><a href="AgendamentoConsultas.php">Cadastro de Consultas</a></li>
              <li><a href="CadastroFuncionario.php">Cadastro de Funcionários</a></li>
              <li><a href="Permissões.php">Modificação de Permissões</a></li>
              <li><a href="UploadDICOM.php">Upload de DICOM</a></li>
              <li><a href="CadastroProntuario.php">Cadastro de Prontuário</a></li>
            </ul>
          </li>
          <li><a><i class="	fa fa-calendar"></i> Agendas <span class="fa fa-chevron-down"></span></a>
            <ul class="nav child_menu">
              <li><a href="Calendar.php">Calendário</a></li>
              <li><a href="PaginaInicial.html">Pagina de Agendamento</a></li>
            </ul>
          </li>
          <li><a><i class="fa fa-table"></i> Tabelas <span class="fa fa-chevron-down"></span></a>
            <ul class="nav child_menu">
              <li><a href="tables.html">Todas as tabelas</a></li>
              <li><a href="TabelasConsult.php">Tabela de Consultas</a></li>
              <li><a href="TabelasPacient.php">Tabela de Pacientes</a></li>
              <li><a href="TabelasFunc.php">Tabela de Funcionários</a></li>
              <li><a href="TabelaGroups.php">Tabela de Grupos de permissão</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="menu_section">
        <h3>Config</h3>
        <ul class="nav side-menu">
          <li><a><i class="fa fa-bug"></i> Paginas Adicionais <span class="fa fa-chevron-down"></span></a>
            <ul class="nav child_menu">
              <li><a href="PaginaInicial.html">Pagina de Agendamento</a></li>
              <li><a href="profile.html">Sobre nós</a></li>
              <li><a href="login.html">Login</a></li>
            </ul>
          </li>
      </div>
    </div>
    <button type="submit" id="Alert" class="btn btn-success">Submit</button>
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
      <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
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
            <img src="../Imagens/Formulários/img.jpg" alt=""> <?php print !empty($usuario) ? $usuario['nm_usuario']  : '' ; ?>
            <span class=" fa fa-angle-down"></span>
          </a>
          <ul class="dropdown-menu dropdown-usermenu pull-right">
            <li><a href="javascript:;">Perfil</a></li>
            <li>
              <a href="javascript:;">
                <span>Configurações</span>
              </a>
            </li>
            <li><a href="javascript:;">Ajuda</a></li>
            <li><a href="login.php" onclick=" <?php $config->Logout(); ?>"><i onclick="<?php $config->Logout(); ?>" class="fa fa-sign-out pull-right"></i>Sair</a></li>
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
