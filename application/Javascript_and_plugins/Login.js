$(document).ready(function(){
  $("#MensagemErro").hide();
  $("#logar").click(function(){
    let params = $("#Login").serialize();
     params.action = "Login";
    $.ajax({
      url: "../Controller/Action_Rotas.php",
      method: "post",
      data:params ,
      dataType:'json',
      success: function(result)
      {
        console.log('OI')
        if(result.success)
        {
          location.href = '../Controller/Action_Rotas.php?action=Home'
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
