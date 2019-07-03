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
