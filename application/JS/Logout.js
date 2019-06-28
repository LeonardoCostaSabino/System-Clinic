$("#Logout").click(function(){
  $.ajax({
      url: "../PHP/Logout.php" ,
      type: "get"
  })
  console.log("OK!");
});
