
$(document).ready(function(){
  $("#MensagemErro").hide();
  $("#logar").click(function(){
    $.ajax({
      url: "../Controller/Action_Rotas.php",
      method: "post",
      data: $("#Login").serializeArray(),
      dataType:'json',
      success: function(result)
      {
        if(result.success)
        {
          location.href='../../View/Pagina_Init.html'
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
