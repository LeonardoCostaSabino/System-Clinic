var Name = $("#Tela_nome").text();

var params = {action:'Logout'};

$("#Logout_Bar").click(function(){

  $.ajax({
      url: "../Controller/Action_Rotas.php",
      method: "POST",
      data: params,
      dataType: "json",
      success: function(result){
        if(result.success){
          location.href = '../View/Login.html'
        }
      }
  })
});
