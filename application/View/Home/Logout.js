var Name = $("#Tela_nome").text();

var params = {rota:'Logout'};

$("#Logout_Bar").click(function(){

  $.ajax({
      url: "../Controller/Rotas.php",
      method: "POST",
      data: params,
      dataType: "json",
      success: function(result){
        if(result.success){
          location.href = '../Controller/Rotas.php?rota=Login'
        }
      }
  })
});
