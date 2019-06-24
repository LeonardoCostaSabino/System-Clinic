  <?php include("Sidebar.php") ?>
        <!-- /top navigation -->

        <!-- page content -->
       <div class="right_col" role="main">
          <div class="">
            <div class="page-title">
              <div class="text-center">
                <h1>Cadastro de Consultas</h1>
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
                    <h2>Dados Obrigatórios</h2>
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
                    <form id="demo-form2" name="frm" data-parsley-validate class="form-horizontal form-label-left">
                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">Data da consulta<span class="required">*</span></label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input id="data_Consulta" name="data_Consulta" required class="date-picker form-control col-md-7 col-xs-12" data-inputmask="'mask':'99/99/9999'" style="width: 23%" type="text" onblur="calcular('this.value');">
                          <h6 class="red" id="resposta"></h6>
                        </div>

                      </div>
                      <div class="form-group">
                       <label class="control-label col-md-3 col-sm-3 col-xs-12">Horário de atendimento <span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input id="hora_Consulta" name="hora_Consulta" required class="form-control col-md-7 col-xs-12" style="width: 25%" data-inputmask="'mask':'99:99'" type="text">
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">Especilidade <span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <select id="Espec_Consultas" name="Espec_Consultas" class="form-control" style="width: 40%">
                            <option value="Psicologia">Psicologia</option>
                            <option value="Ortopedia">Ortopedia</option>
                            <option value="Clinico Geral">Clinico Geral</option>
                            <option value="Psiquiatria">Psiquiatria</option>
                            <option value="Ginecologista">Ginecologista</option>
                            <option value="Fisioterapia">Fisioterapia</option>
                            <option value="Neurologia">Neurologia</option>
                            <option value="Fonoaudilogia">Fonoaudilogia</option>
                            <option value="Demartologia">Demartologia</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="last-name">Médico Resposavel <span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <select id="Medico_Consulta" name="Medico_Consulta" class="form-control" style="width: 60%">
                            <option value="Psicologia">Psicologia</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">CRM<span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input id="Crm_Consultas" name="Crm_Consultas" value="<?php //Select ?>" class="date-picker form-control col-md-7 col-xs-12" disabled data-inputmask="'mask':'99-99999-9'" style="width: 23%" placeholder="<?php //Select ?>" required="required" type="text">
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="last-name">CPF <span class="required">*</span></label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input type="text" name="CPF_Pacientes" id="CPF_Pacientes" required="required" data-inputmask="'mask':'999-999-999-99'" style="width: 30%" class="form-control col-md-7 col-xs-12">
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">Nome do Paciente <span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input id="Nome_Pacientes" name="Nome_Pacientes" class="date-picker form-control col-md-7 col-xs-12" disabled style="width: 50%" required="required" type="text">
                        </div>
                      </div>
                      <div class="ln_solid"></div>
                      <div class="form-group">
                        <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
						              <button class="btn btn-primary" type="reset">Apagar</button>
                          <button type="submit" class="btn btn-success" onclick="Validation();">Enviar</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
         </div>
        <!-- /page content -->
        <script type="text/javascript">

        $("#my-calendar1").zabuto_calendar(
            {
            language: "pt",
            ajax: {
                url: "../Carregar.json",
                modal: false
            },
            action: function() {myDateFunction(this.id)},
            legend:
                [
                    {type: "text", label: "Text", badge: "00"},
                    {type: "block", label: "Disponivel", classname: "Livre"},
                    {type: "block", label: "Indisponivel", classname: "Ocupado"},
                    {type: "spacer"},
                ],
            cell_border: true,
            today: true,
            show_days: false,
            weekstartson: 0,
            nav_icon: {
              prev: '<i class="fa fa-chevron-circle-left"></i>',
              next: '<i class="fa fa-chevron-circle-right"></i>'
            }
        });
        </script>
        <!-- footer content -->
    <?php include("Footer.php") ?>
