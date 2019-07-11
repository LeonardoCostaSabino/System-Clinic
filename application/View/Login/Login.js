$(document).ready(function(){
    $("#MensagemErro").hide();
    $("#logar").click(function(){
        let params = $("#Login").serialize();
        // params.rota = 'Login';
        $.ajax({
            url: "index.php",
            method: "post",
            data: params ,
            dataType:'json',
            success: function(result)
            {
                if(result.success)
                {
                    location.href = '/?rota=Home'
                }
                else
                {
                    $("#MensagemErro").html(result.message)
                    $("#MensagemErro").show();
                }
            }
        })
    })

    $("#Create").click(function(){

        Swal.fire
        ({
            allowOutsideClick: false,
            allowEscapeKey: false,
            type: "success",
            title: 'Parabens cadastro realizado com sucesso',
            text: "Sua senha de primeiro acesso é " + Senha,
            confirmButtonText: "OK!"
        });

    })
});
