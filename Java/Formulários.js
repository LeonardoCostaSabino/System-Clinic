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
/*
function hideOrShow()
{
  var quest = document.formulario.sport;
  var quest1 = document.formulario.historic;
  var quest2 = document.formulario.contMedic;
  var quest3 = document.formulario.recMedic;
  var quest4 = document.formulario.anab;
  var quest5 = document.formulario.atualRestr;
  var quest6 = document.formulario.restr;

  var tb = document.getElementById('toBeHidded');
  var tb1 = document.getElementById('toBeHidded1');
  var tb2 = document.getElementById('toBeHidded2');
  var tb3 = document.getElementById('toBeHidded3');
  var tb4 = document.getElementById('toBeHidded4');
  var tb5 = document.getElementById('toBeHidded5');
  var tb6 = document.getElementById('toBeHidded6');

  if(quest.value == 'n'){
    tb.style.display='none';
  }else{
    tb.style.display='';
  }

  if(quest1.value == 'n'){
    tb1.style.display='none';
  }else{
    tb1.style.display='';
  }

  if(quest2.value == 'n'){
    tb2.style.display='none';
  }else{
    tb2.style.display='';
  }

  if(quest3.value == 'n'){
    tb3.style.display='none';
  }else{
    tb3.style.display='';
  }

  if(quest4.value == 'n'){
    tb4.style.display='none';
  }else{
    tb4.style.display='';
  }

  if(quest5.value == 'n'){
    tb5.style.display='none';
  }else{
    tb5.style.display='';
  }

  if(quest6.value == 'n'){
    tb6.style.display='none';
  }else{
    tb6.style.display='';
  }
}
*/
$(document).ready(function(){
  $('input').iCheck({
    checkboxClass: 'icheckbox_square-red',
    radioClass: 'iradio_square-red',
    increaseArea: '20%' // optional
  });
});

var instance = new TagsInput({
    selector: 'example',
    max : 10,
    duplicate : true,
    wrapperClass : 'tags-input-wrapper'
});
