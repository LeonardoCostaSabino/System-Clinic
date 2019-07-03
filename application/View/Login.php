
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>System Medic Clinic </title>

    <!-- Bootstrap -->
    <link href="../Javascript_and_plugins/plugins_Jquery/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="../Javascript_and_plugins/plugins_Jquery/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->
    <link href="../Javascript_and_plugins/plugins_Jquery/nprogress/nprogress.css" rel="stylesheet">
    <!-- Animate.css -->
    <link href="../Javascript_and_plugins/plugins_Jquery/animate.css/animate.min.css" rel="stylesheet">

    <!-- Custom Theme Style -->
    <link href="../Css/Admin_System.css" rel="stylesheet">
  </head>

  <body class="login">
    <div>
      <a class="hiddenanchor" id="signup"></a>
      <a class="hiddenanchor" id="signin"></a>

      <div class="login_wrapper">
        <div class="animate form login_form">
          <section class="login_content">
            <h2 id="MensagemErro">Usuário ou senha errados!</h2>
            <form id="Login" method="post">
              <h1>System Login</h1>
              <div>
                <input type="text" id="user" name="user" class="form-control" placeholder="CPF ou Email"/>
              </div>
              <div>
                <input type="password" id="senha" name="senha" class="form-control" placeholder="Senha"/>
                <div hidden>
                <input type="password" value="Login" name="action"/>
                </div>
              </div>
              <div>
                <button type="button" class="btn btn-success"  id="logar">Entrar</button>
              </div>

              <div class="clearfix"></div>

              <div class="separator">

                <div>
                  <h1><i class="fa fa-desktop"></i> System Medic Clinic</h1>
                  <p>©2019 All Rights Reserved. Gentelella Alela! is a Bootstrap 3 template. Privacy and Terms</p>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  </body>
  <script src="../Javascript_and_plugins/plugins_Jquery/jquery/dist/jquery.min.js"></script>
  <script type="text/javascript" src="../Javascript_and_plugins/Login.js"></script>
</html>
