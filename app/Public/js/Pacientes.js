
var Type_Cad;
var Senha;
var RegexDate = /^\s*(3[01]|[12][0-9]|0?[1-9])\/(1[012]|0?[1-9])\/((?:19|20)\d{2})\s*$/;
var testPeso = /^(4[0-9]|[5-9][0-9]|[0-2]{1}[0-9][0-9]|[1-2][0-9][0-9])$/;
var testAltura = /^[0-2],\d{2}$/;

//Submit (formulário de Pacientes)
$("#cadastrarPaciente").click(function(){

    if(! $("#Cpf_Div").is(":hidden")){

        generatePassword(8);
        Swal.fire
        ({
            allowOutsideClick: false,
            allowEscapeKey: false,
            type: "success",
            title: 'Parabens cadastro realizado com sucesso',
            text: "Sua senha de primeiro acesso é " + Senha,
            confirmButtonText: "OK!"
        });
        $("#FormInfoG_Pacientes").serialize();
    }
    else  {
        Swal.fire
        ({
            allowOutsideClick: false,
            allowEscapeKey: false,
            type: "success",
            title: 'Parabens cadastro realizado com sucesso',
            confirmButtonText: "OK!"
        });
        $("#FormInfoG_Pacientes").serialize();
    }
});

// Gerador de uma senha

function generatePassword(len)
{
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
    Senha = pwd.sort(function() { return R() - .5; }).join('');
    document.frm.Senha.value = Senha;
};

// Modifica o Formulário para pré-cadastro (formulário de Pacientes)
$("#Pre_Cad").click(function()

{
    document.frm.Senha.value = null
    if(!$("#Cpf_Div").is(":hidden")){

        $("#Cpf_Div").hide();
        $("#Id_Div").hide();
        $("#Em_Div").hide();
        $("#Senha_Div").hide();
        $("#Opicional_Div").hide();

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        });

        Toast.fire({
            type: 'success',
            title: 'Voce modificou para o modo de Pré Cadastro'
        })
    };
});

//Modifica o Formulário para cadastro-completo (formulário de Pacientes)
$("#Cad_CP").click(function()
{
    Type_Cad = "Cadastro-Completo"

    if($("#Cpf_Div").is(":hidden")){

        $("#Cpf_Div").show();
        $("#Id_Div").show();
        $("#Em_Div").show();
        $("#Senha_Div").show();
        $("#Opicional_Div").show();

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        });
        Toast.fire({
            type: 'success',
            title: 'Voce modificou para o modo de Cadastro Completo'
        });
    };
});

function Mensagem_Erro_Date(data)
{
  var OK = RegexDate.exec(data.value);
  if (!OK)
  {
    $(resposta).html("");
    $(resposta).append("Data Incorreta");
  }
}

//Calcula o Campo Idade do Formulário de cadastro da pessoa (formulário de Pacientes)
function calculateAge(dobString)
{
  var dob = new Date(dobString);
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var birthdayThisYear = new Date(dob.getDate(), dob.getMonth(),currentYear);
  var age = currentYear - dob.getFullYear();
  if(birthdayThisYear > currentDate)
  {
    age--;
  }
  return age;
  }

//Verifica os Dados do formulário para calcular a idade (formulário de Pacientes)
function calcular(data)
{
  var data = document.frm.data.value;
  var partes = data.split("/");
  var junta = partes[2]+"-"+partes[1]+"-"+partes[0];
  document.frm.idade.value = (calculateAge(junta));
}

$(document).ready(function(){
  $('input').iCheck({
    checkboxClass: 'icheckbox_minimal_red',
    radioClass: 'iradio_minimal',
    increaseArea: '20%' // optional
  });
