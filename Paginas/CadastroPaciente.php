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
                    <h2>Informações Gerais <small>Dados Obrigatórios</small></h2>
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
                  <form method="post" id="FormInfoG_Pacientes" action="Cadastro.php" name="frm"  class="form-horizontal form-label-left">
                    <div class="form-group">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12">Nome Completo <span class="required">*</span></label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <input type="text" name="NomeC_Pacientes" id="NomeC" required="required" style="width: 50%" class="form-control col-md-7 col-xs-12">
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12" for="last-name">CPF <span class="required">*</span></label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <input type="text" name="CPF_Pacientes" id="CPF" required="required" data-inputmask="'mask':'999-999-999-99'" style="width: 30%" class="form-control col-md-7 col-xs-12">
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12">RG <span class="required">*</span></label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <input id="RG" name="RG_Pacientes" class="form-control col-md-7 col-xs-12" style="width: 25%" data-inputmask="'mask':'99-999-999-9'" type="text">
                      </div>
                    </div>
                    <div class="form-group">
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
                    <div class="form-group">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12">Data de Nascimento<span class="required">*</span></label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <input id="data" name="Nasce_Pacientes" class="date-picker form-control col-md-7 col-xs-12" data-inputmask="'mask':'99/99/9999'" style="width: 23%" type="text" onblur="calcular('this.value');">
                        <h6 class="red" id="resposta"></h6>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12">Idade<span class="required">*</span>
                      </label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <input id="idade" name="Idade_Pacientes" class="date-picker form-control col-md-7 col-xs-12" disabled style="width: 10%" type=number>
                        <h5 class="red"></h5>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12">Telefone para Contato<span class="required">*</span></label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <input name="tel_Pacientes" class="date-picker form-control col-md-7 col-xs-12" data-inputmask="'mask':'(99) 9999-9999'" style="width: 30%" required="required" type="text">
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12">Email<span class="required">*</span></label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <input name="email_Pacientes" class="date-picker form-control col-md-7 col-xs-12" style="width: 50%" required="required" type="text">
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12">Senha<span class="required">*</span>
                      </label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <input name="Senha_Pacientes" id="Senha" class="date-picker form-control col-md-7 col-xs-12" type="password" style="width: 30%" required="required" type="text">
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12">Confirmar Senha<span class="required">*</span>
                      </label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <input id="CSenha" type="password" class="date-picker form-control col-md-7 col-xs-12" style="width: 30%"  required="required" type="text">
                      </div>
                    </div>
                    <div class="x_panel">
                      <div class="x_title">
                        <h2>Informações Especificas<small> Dados Opcionias</small></h2>
                        <div class="clearfix"></div>
                      </div>
                    <div class="form-group">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">Peso
                      </label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <input type="text" id="Peso" data-inputmask="'mask':'999'" style="width: 25%" class="form-control col-md-7 col-xs-12">  <h2 id="resposta2">Kg</h2>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">Altura
                      </label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <input type="text" id="Altura" data-inputmask="'mask':'9,99'" style="width: 25%" class="form-control col-md-7 col-xs-12"> <h2 id="resposta3">M</h2>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">Tipo Sangueneo
                      </label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <select class="form-control" style="width: 30%">
                          <option>A+</option>
                          <option>A-</option>
                          <option>B+</option>
                          <option>B-</option>
                          <option>AB+</option>
                          <option>AB-</option>
                          <option>O+</option>
                          <option>O-</option>
                        </select>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12">Filiação/Tutor 1 [Parentes]</label>
                      <div class="col-md-9 col-sm-9 col-xs-12">
                        <input type="text" class="form-control" placeholder="">
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12">Filiação/Tutor 2 [Parentes]</label>
                      <div class="col-md-9 col-sm-9 col-xs-12">
                        <input type="text" class="form-control" placeholder="">
                      </div>
                    </div>
                    <div class="form-group">
                    <div class="x_title">
                      <h2>Você pratica regularmente atividades físicas?</h2>
                      <div class="clearfix"></div>
                    </div>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <input type="radio" class="flat " name="gender" id="genderM" value="M" checked="" required /><b>Sim</b> <br> <br>
                        <input type="radio" class="flat" name="gender" id="genderF" value="F" /><b>Não</b>
                      </div>
                    </div>
                          <!-- Hidden -->
                    <div class="control-group">
                      <div class="form-group">
                      <div class="x_title">
                        <h2>Quais atividades realiza?<small> Coloque a atividade e pressione Enter</small></h2>
                        <div class="clearfix"></div>
                      </div>
                        <div id="tags" class="col-md-9 col-sm-9 col-xs-12">
                          <input type="text" id="example">
                        </div>
                    </div>
                  </div>
                    <div class="form-group">
                      <label class="control-label col-xs-12" for="first-name">Frequência Semanal:
                      </label>
                      <div class="col-md-9 col-sm-9 col-xs-12">
                        <small>Dias</small>
                       <input type="text" class="js-range-slider" id="frg" name="my_range" value="" step="1"/>
                      </div>
                    </div>
                        <hr size="50">
                    <div class="form-group">
                      <label class="control-label col-xs-12" for="first-name">Duração diária das atividades:
                      </label>
                      <div class="col-md-9 col-sm-9 col-xs-12">
                        <small>Horas</small>
                       <input type="text" class="js-range-slider" id="frg2" name="my_range" value="" step="1"/>
                      </div>
                    </div>
                     <!-- Hidden -->
                    <div class="form-group">
                      <label class="control-label col-xs-12" for="first-name">Sobre seu condicionamento físico, pode-se dizer que você é:
                      </label>
                      <div class="col-md-9 col-sm-9 col-xs-12">
                       <input type="radio" class="flat" name="gender" id="genderF" value="F" /> Sedentário
                      </div>
                      <div class="col-md-9 col-sm-9 col-xs-12">
                       <input type="radio" class="flat" name="gender" id="genderF" value="F" /> Pouco ativo
                      </div>
                      <div class="col-md-9 col-sm-9 col-xs-12">
                       <input type="radio" class="flat" name="gender" id="genderF" value="F" /> Ativo
                      </div>
                      <div class="col-md-9 col-sm-9 col-xs-12">
                       <input type="radio" class="flat" name="gender" id="genderF" value="F" /> Muito ativo
                      </div>
                      <div class="col-md-9 col-sm-9 col-xs-12">
                       <input type="radio" class="flat" name="gender" id="genderF" value="F" /> Atleta
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label col-xs-12" for="first-name">Sobre sua condição natatória, pode-se dizer que você:
                      </label>
                      <div class="col-md-9 col-sm-9 col-xs-12">
                       <input type="radio" class="flat" name="gender" id="genderF" value="F" /> Não sabe nadar
                      </div>
                      <div class="col-md-9 col-sm-9 col-xs-12">
                       <input type="radio" class="flat" name="gender" id="genderF" value="F" /> Nada com dificuldade
                      </div>
                      <div class="col-md-9 col-sm-9 col-xs-12">
                       <input type="radio" class="flat" name="gender" id="genderF" value="F" /> Sei nadar
                      </div>
                      <div class="col-md-9 col-sm-9 col-xs-12">
                       <input type="radio" class="flat" name="gender" id="genderF" value="F" /> Atleta
                      </div>
                    </div>
                    <div class="form-group">
                    <label>Em relação à sua flutuabilidade, você consegue se manter no meio aquático, durante 10 minutos,
            		sem nenhum suporte, apoio ou auxilio, com a cabeça elevada e o corpo na posição vertical?</label>
                      <p>
                        Sim:
                        <input type="radio" class="flat" name="gender" id="genderM" value="M"/>
                        Não:
                        <input type="radio" class="flat" name="gender" id="genderF" value="F"/>
                      </p>
                    </div>
                    <div class="form-group">
                      <label class="control-label col-xs-12" for="first-name">Se ocorresse um teste hoje, para avaliar o seu condicionamento físico, você preferiria:
                      </label>
                      <div class="col-md-9 col-sm-9 col-xs-12">
                       <input type="radio" class="flat" name="gender" id="genderF" value="F" /> Correr
                      </div>
                      <div class="col-md-9 col-sm-9 col-xs-12">
                       <input type="radio" class="flat" name="gender" id="genderF" value="F" /> Caminhar
                      </div>
                    </div>
                    <div class="form-group">
                    <label class="control-label col-xs-12">Possui histórico familiar de doenças?</label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        Sim:
                        <input type="radio" class="flat" name="gender" id="genderM" value="M" checked="" required />
                        Não:
                        <input type="radio" class="flat" name="gender" id="genderF" value="F" />
                      </div>
                          <!-- Hidden -->
                    <div class="control-group">
                        <label class="control-label col-xs-12">Quais doenças e grau de parentesco(aplica-se a avô, avó, pai, mãe, irmãos)?<small> Coloque a atividade e pressione Enter</small></label>
                        <div class="col-md-9 col-sm-9 col-xs-12">
                          <input id="tags_1" type="text" class="tags form-control"/>
                          <div id="suggestions-container" style="position: relative; float: left; margin: 10px;"></div>
                        </div>
                      </div>
                    </div>
                          <!-- Hidden -->
                    <div class="ln_solid"></div>
                    <div class="form-group">
                      <div class="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
                        <button type="button" class="btn btn-primary">Cancel</button>
             <button class="btn btn-primary" type="reset">Reset</button>
                        <button type="submit" class="btn btn-success">Submit</button>
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

        <!-- footer content -->
        <?php include("Footer.php") ?>
