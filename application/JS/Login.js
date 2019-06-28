$(document).ready(function(){
  $("#MensagemErro").hide();
  $("#logar").click(function(){
    $.ajax({
      url: "../../PHP/Validar_Login.php",
      method: "post",
      data: $("#Login").serializeArray(),
      dataType:'json',
      success: function(result)
      {
        if(result.success)
        {
          location.href='../../View/System_Administer.php'
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
