  <!-- Bootstrap -->
  <link href="../Javascript_and_plugins/plugins_Jquery/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
  <!-- Font Awesome -->
  <link href="../Javascript_and_plugins/plugins_Jquery/font-awesome/css/font-awesome.min.css" rel="stylesheet">
  <!-- NProgress -->
  <link href="../Javascript_and_plugins/plugins_Jquery/nprogress/nprogress.css" rel="stylesheet">
  <!-- Bootstrap -->
  <link href="../Javascript_and_plugins/plugins_Jquery/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
  <!-- Font Awesome -->
  <link href="../Javascript_and_plugins/plugins_Jquery/font-awesome/css/font-awesome.min.css" rel="stylesheet">
  <!-- bootstrap-wysiwyg -->
  <link href="../Javascript_and_plugins/plugins_Jquery/google-code-prettify/bin/prettify.min.css" rel="stylesheet">
  <!-- Select2 -->
  <link href="../Javascript_and_plugins/plugins_Jquery/select2/dist/css/select2.min.css" rel="stylesheet">
  <!-- Switchery -->
  <link href="../Javascript_and_plugins/plugins_Jquery/switchery/dist/switchery.min.css" rel="stylesheet">
  <!-- IChecker -->
  <link href="../Javascript_and_plugins/plugins_Jquery/icheck-1.x/skins/square/red.css" rel="stylesheet">
  <!-- rangeSlider -->
  <link href="../Javascript_and_plugins/plugins_Jquery/ion.rangeSlider/css/ion.rangeSlider.css" rel="stylesheet">
  <link href="../Javascript_and_plugins/plugins_Jquery/ion.rangeSlider/css/ion.rangeSlider.skinNice.css" rel="stylesheet">
  <!-- fullcalendar -->
  <link href="../Javascript_and_plugins/plugins_Jquery/fullcalendar/dist/fullcalendar.min.css" rel="stylesheet">
  <link href="../Javascript_and_plugins/plugins_Jquery/fullcalendar/dist/fullcalendar.print.css" rel="stylesheet" media="print">
  <!-- Dropzone.js -->
  <link href="../Javascript_and_plugins/plugins_Jquery/dropzone/dist/min/dropzone.min.css" rel="stylesheet">

  <link href="//cdnjs.cloudflare.com/ajax/libs/jquery-form-validator/2.3.26/theme-default.min.css">
  <!-- Custom Theme Style -->
  <link href="../../Css/Admin_System.css" rel="stylesheet">
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
                <li id="Home_link">
                  <a><i class="fa fa-home"></i> Home</a>
                </li>
                <li>
                  <a><i class="fa fa-edit"></i> Nome <span class="fa fa-chevron-down"></span></a>
                  <ul class="nav child_menu">
                    <li id="Paciente_link" >
                      <a><i class="fa fa-child" aria-hidden="true"></i>Pacientes</a>
                    </li>
                      <li>
                      <a><i class="fa fa-book"></i>Consultas</a>
                      <ul class="nav child_menu">
                        <li id="Agendamento_link">
                          <a><i class="fa fa-calendar-check-o"></i>Agendamento de consultas</a>
                        </li>
                        <li id="Visualizar_link">
                          <a><i class="fa fa-calendar"></i>Visualizar consultas</a>
                        </li>
                        </li>
                      </ul>
                    </li>
                        <li id="Funcionario_link" ><a><i class="fa fa-user"></i>Funcionários</a></li>
                        <li id="Prontuario_link" ><a><i class="fa fa-file-o"></i>Prontuário</a></li>
                        <li id="Clinicas_link" ><a><i class="fa fa-hospital-o"></i>Clinicas</a></li>
                        <li id="Dicom_link"><a><i class="fa fa-camera-retro"></i>Dicom</a></li>
                  </ul>
                </li>
                <li><a><i class="fa fa-file-text-o"></i> Relatórios <span class="fa fa-chevron-down"></span></a>
                  <ul class="nav child_menu">
                    <li id="Pdf1_link"><a href="Pdf_Test.php">Relatório.PDF</a></li>
                    <li id="Pdf2_link"><a href="Pdf_Test0.php">Relatório.PDF</a></li>
                  </ul>
                </li>
                <li>
                  <a>
                    <i class="fa fa-globe">
                    </i> Funções Adicionais
                    <span class="fa fa-chevron-down"></span>
                  </a>
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
                  <li>
                    <a>
                      <i class="fa fa-bug">
                      </i> Gerenciamento
                      <span class="fa fa-chevron-down">
                      </span>
                    </a>
                    <ul class="nav child_menu">
                      <li><a>Pagina de Agendamento</a></li>
                      <li><a>Modificação de Permissões</a></li>
                      <li><a>Sobre nós</a></li>
                    </ul>
                  </li>
                </ul>
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
            <a data-toggle="tooltip" data-placement="top" title="Logout" id="Logout_Bar">
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
                    <img id="Tela_nome" src="../Imagens/Formulários/img.jpg" alt=""> Vai ser Ajax
                    <span class=" fa fa-angle-down"></span>
                  </a>
                  <ul class="dropdown-menu dropdown-usermenu pull-right">
                    <li><a href="">Perfil</a></li>
                    <li><a onclick="HelpModal()" class="fa fa-info-circle" > Ajuda</a></li>
                    <li><a href="../Controller/Action_Rotas.php?action=Logout" class="fa fa-sign-out pull-right"></i> Sair</a></li>
                  </ul>
                </li>
                <li role="presentation" class="dropdown"></li>
                <a href="javascript:;" class="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                  <i class="fa fa-envelope-o"></i>
                  <span class="badge bg-green">6</span>
                </a>
                <ul id="menu1" class="dropdown-menu list-unstyled msg_list" role="menu">
                  <li>
                    <a>
                      <span class="image"><img src="Imagens/Formulários/img.jpg" alt="Profile Image" /></span>
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
