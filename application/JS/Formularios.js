                 //Declaração de Variavel para Execução dos Scripts

var Type_Cad;
var Senha;
var RegexDate = /^\s*(3[01]|[12][0-9]|0?[1-9])\/(1[012]|0?[1-9])\/((?:19|20)\d{2})\s*$/;
var testPeso = /^(4[0-9]|[5-9][0-9]|[0-2]{1}[0-9][0-9]|[1-2][0-9][0-9])$/;
var testAltura = /^[0-2],\d{2}$/;

//Submit (formulário de Pacientes)
$("#cadastrarPaciente").click(function(){
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
});

//Habilita a função de Mudança de para o modo tela cheia
function toggleFullScreen()
{
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
};

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

if(!$("#Cpf_Div").is(":hidden")){
  Type_Cad = "Pre-Cadastro";

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

//Mensagem de erro após a validação da Data (formulário de Pacientes)
function Mensagem_Erro_Date(dat)
{
  var OK = RegexDate.exec(dat.value);
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

//Gera os campos de endereço após o usuário digitar o Cep (Formulário de Funcionários)
$("#cep").focusout(function()
  {
		//Início do Comando AJAX
		$.ajax({
			//O campo URL diz o caminho de onde virá os dados
			//É importante concatenar o valor digitado no CEP
			url: 'https://viacep.com.br/ws/'+$(this).val()+'/json/unicode/',
			//Aqui você deve preencher o tipo de dados que será lido,
			//no caso, estamos lendo JSON.
			dataType: 'json',
			//SUCESS é referente a função que será executada caso
			//ele consiga ler a fonte de dados com sucesso.
			//O parâmetro dentro da função se refere ao nome da variável
			//que você vai dar para ler esse objeto.
			success: function(resposta){
				//Agora basta definir os valores que você deseja preencher
				//automaticamente nos campos acima.
				$("#logradouro").val(resposta.logradouro);
				$("#municipio").val(resposta.municipio);
				$("#bairro").val(resposta.bairro);
				$("#cidade").val(resposta.localidade);
				$("#uf").val(resposta.uf);
				//Vamos incluir para que o Número seja focado automaticamente
				//melhorando a experiência do usuário
				$("#numero").focus();
			}
		});
	});

//Gera o Campo de Check-Box (formulário de Pacientes)
$(document).ready(function(){
  $('input').iCheck({
    checkboxClass: 'icheckbox_square-red',
    radioClass: 'iradio_square-red',
    increaseArea: '20%' // optional
  });
});

// Gera um número aleatório
function returnRand() {
    var randomization = Math.random().toString();
    var lengthNumbers = randomization.length;
    var sort = randomization.substring(lengthNumbers, lengthNumbers - 1);
    return sort;
}

// Gera uma senha simples
function generatePasswordEasy() {
    var retorno = 'password';
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    retorno = letters[returnRand()].toUpperCase() + letters[returnRand()] + letters[returnRand()] +
        returnRand() + returnRand() + returnRand();
    return retorno;
}
