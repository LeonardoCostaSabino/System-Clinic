function toggleFullScreen() {
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
}

// Gera uma senha complexa
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
    document.frm.Senha.value = pwd.sort(function() { return R() - .5; }).join('');
    $("#Teste").append(document.getElementById('Senha').value);
}


var RegexDate = /^\s*(3[01]|[12][0-9]|0?[1-9])\/(1[012]|0?[1-9])\/((?:19|20)\d{2})\s*$/;
var testPeso = /^(4[0-9]|[5-9][0-9]|[0-2]{1}[0-9][0-9]|[1-2][0-9][0-9])$/;
var testAltura = /^[0-2],\d{2}$/;


function Mensagem_Erro_Date(dat)
{
  var OK = RegexDate.exec(dat.value);
  if (!OK)
  {
    $(resposta).html("");
    $(resposta).append("Data Incorreta");
  }
}


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

function calcular(data)
{
  var data = document.frm.data.value;
  var partes = data.split("/");
  var junta = partes[2]+"-"+partes[1]+"-"+partes[0];
  document.frm.idade.value = (calculateAge(junta));
}

function Validation()
{
  if($("#Pass1").val() != $("#Pass2").val())
    {
      alert("Senhas não conferem");
    }
    else
    {
      alert("Cadastro realizado com sucesso");
    }
}

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
