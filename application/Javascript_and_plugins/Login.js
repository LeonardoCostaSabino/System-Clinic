$(document).ready(function(){
  $("#MensagemErro").hide();
  $("#logar").click(function(){
    let params = $("#Login").serialize();
    // params.rota = 'Login';
    $.ajax({
      url: "../Controller/Rotas.php",
      method: "post",
      data: params ,
      dataType:'json',
      success: function(result)
      {
        if(result.success)
        {
          location.href = '../Controller/Rotas.php?rota=Home'
        }
        else
        {
          $("#MensagemErro").html(result.message)
          $("#MensagemErro").show();
        }
      }
    })
  })
});
