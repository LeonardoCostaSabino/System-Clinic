var Name = $("#Tela_nome").text();

var params = {rota:'Logout'};

$("#Logout_Bar").click(function(){

  $.ajax({
      url: "../index.php",
      method: "POST",
      data: params,
      dataType: "json",
      success: function(result){
        if(result.success){
          location.href = '../?rota=Login'
        }
      }
  })
});
