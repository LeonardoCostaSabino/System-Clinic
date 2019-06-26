        <?php include("Sidebar.php") ?>

        <!-- page content -->
        <div class="right_col" role="main">
          <div class="">
            <div class="page-title">
              <div class="text-center">
                <h1>Formulário dos Pacientes</h1>
              </div>
              <div class="title_right">
                <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                </div>
              </div>
            </div>
            <div class="clearfix"></div>

            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2>Informações Gerais <small>Dados Pessoais</small></h2>
                    <ul class="nav navbar-right panel_toolbox">
                      <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                      </li>
                      <li><a class="close-link"><i class="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                  <br />
                  <form method="post" id="FormInfoG_Pacientes" action="../PHP/InserirPaciente.php" name="frm"  class="form-horizontal form-label-left">
                    <div class="form-group">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12">Nome Completo <span class="required">*</span></label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <input type="text" name="NomeC_Pacientes" id="NomeC" required="required" style="width: 50%" class="form-control col-md-7 col-xs-12">
                      </div>
                    </div>
                    <div class="form-group" id="Cpf_Div">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12" for="last-name">CPF <span class="required">*</span></label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <input type="text" name="CPF_Pacientes" id="CPF" data-inputmask="'mask':'999-999-999-99'" style="width: 30%" class="form-control col-md-7 col-xs-12">
                      </div>
                    </div>
                    <div class="form-group" id="Dt_Div">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12">Data de Nascimento<span class="required">*</span></label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <input id="data" name="Nasce_Pacientes" class="date-picker form-control col-md-7 col-xs-12" data-inputmask="'mask':'99/99/9999'" style="width: 23%" type="text" onblur="calcular('this.value');">
                        <h6 class="red" id="resposta"></h6>
                      </div>
                    </div>
                    <div class="form-group" id="Gen_Div">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12">Genero <span class="required">*</span></label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <div id="gender" class="btn-group" data-toggle="buttons">
                          <label class="btn btn-default" data-toggle-class="btn-secundary" data-toggle-passive-class="btn-default">
                            <input type="radio" name="Genero_Pacientes" value="Masculino"> &nbsp; Masculino &nbsp;
                          </label>
                          <label class="btn btn-default" data-toggle-class="btn-secundary" data-toggle-passive-class="btn-default">
                            <input type="radio" name="Genero_Pacientes" value="Feminino"> Feminino
                          </label>
                          <label class="btn btn-default" data-toggle-class="btn-secundary" data-toggle-passive-class="btn-default">
                            <input type="radio" name="Genero_Pacientes" value="NA"> Não Especificado
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="form-group" id="Id_Div">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12">Idade<span class="required">*</span>
                      </label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <input id="idade" name="Idade_Pacientes" class="date-picker form-control col-md-7 col-xs-12" disabled style="width: 20%" type=number>
                        <h5 class="red"></h5>
                      </div>
                    </div>
                    <div class="form-group" id="Tel_Div">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12">Telefone para Contato<span class="required">*</span></label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <input name="tel_Pacientes" class="date-picker form-control col-md-7 col-xs-12" data-inputmask="'mask':'(99) 9999-9999'" style="width: 30%" required="required" type="text">
                      </div>
                    </div>
                    <div class="form-group" id="Em_Div">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12">Email<span class="required">*</span></label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <input name="email_Pacientes" class="date-picker form-control col-md-7 col-xs-12" style="width: 50%" required="required" type="text">
                      </div>
                    </div>
                    <div class="form-group" id="Senha_Div">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12">Senha<span class="required">*</span>
                      </label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <input name="Senha_Pacientes" disabled id="Senha" class="date-picker form-control col-md-7 col-xs-12" value="" type="password" style="width: 30%" required="required" type="text">
                        <small id="Teste">A senha gerada:</small>
                      </div>
                    </div>
                    <div class="x_panel" id="Opicional_Div">
                      <div class="x_title">
                        <h2>Informações Especificas<small> Dados Opcionias</small></h2>
                        <div class="clearfix"></div>
                      </div>
                    <div class="form-group">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">Peso
                      </label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <input name="Peso_Pacientes" type="text" id="Peso" data-inputmask="'mask':'999'" style="width: 25%" class="form-control col-md-7 col-xs-12">  <h2 id="resposta2">Kg</h2>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">Altura
                      </label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <input name="Altura_Pacientes" type="text" id="Altura" data-inputmask="'mask':'9,99'" style="width: 25%" class="form-control col-md-7 col-xs-12"> <h2 id="resposta3">M</h2>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">Tipo Sangueneo
                      </label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <select name="Tipo_Pacientes" class="form-control" style="width: 30%">
                          <option value="A+" >A+</option>
                          <option value="A-" >A-</option>
                          <option value="B+" >B+</option>
                          <option value="B-" >B-</option>
                          <option value="AB+" >AB+</option>
                          <option value="AB-" >AB-</option>
                          <option value="O+" >O+</option>
                          <option value="O-" >O-</option>
                        </select>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12">Filiação/Tutor 1 [Parentes]</label>
                      <div class="col-md-9 col-sm-9 col-xs-12">
                        <input type="text" name="Filiacao1_Pacientes" class="form-control" placeholder="">
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12">Filiação/Tutor 2 [Parentes]</label>
                      <div class="col-md-9 col-sm-9 col-xs-12">
                        <input type="text" name="Filiacao2_Pacientes" class="form-control" placeholder="">
                      </div>
                    </div>
                  </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        <!-- /page content -->
        <script type="text/javascript">

        function generatePassword(len) {
            var pwd = [],
                cc = String.fromCharCode,
                R = Math.random,
                rnd, i;
            pwd.push(cc(48 + (0 | R() * 10))); // push a number
            pwd.push(cc(65 + (0 | R() * 26))); // push an upper case letter
            for (i = 2; i < len; i++) {
                rnd = 0 | R() * 62; // generate upper OR lower OR number
                pwd.push(cc(48 + rnd + (rnd > 9 ? 7 : 0) + (rnd > 35 ? 6 : 0)));
            }
            // shuffle letters in password
            document.frm.Senha1.value = pwd.sort(function() { return R() - .5; }).join('');
            document.getElementById("Teste").innerHTML= "A senha gerada:" + pwd.sort(function() { return R() - .5; }).join('');
        }

        </script>
        <!-- footer content -->
        <?php include("Footer.php") ?>
