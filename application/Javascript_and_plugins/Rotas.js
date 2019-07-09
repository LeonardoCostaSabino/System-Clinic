
var home = {action:'Home'};
var paciente = {action:'Paciente'};
var funcionario = {action:'Funcionario'};
var prontuario = {action:'Prontuario'};
var clinicas = {action:'Clinicas'};
var dicom = {action:'Dicom'};
var agendamento = {action:'Agendamento'};
var visualizar = {action:'Visualizar_con'};
var permissao = {action:'Permisssao'};
var pdf1 = {action:'Pdf1'};
var pdf2 = {action:'Pdf2'};

$("#Home_link").click(function(){
  $.ajax({
    url: "../Controller/Action_Rotas.php?",
    method: "post",
    data: home,
    dataType:'json',
    success: function(result)
    {
      if(result.success)
      {
      }
      else
      {
      }
    }
  })
})

$("#Paciente_link").click(function(){
  $.ajax({
    url: "../Controller/Action_Rotas.php",
    method: "post",
    data: paciente,
    dataType:'json',
    success: function(result)
    {
      if(result.success)
      {
      }
      else
      {
      }
    }
  })
})
$("#Visualizar_link").click(function(){
  $.ajax({
    url: "../Controller/Action_Rotas.php",
    method: "post",
    data: visualizar,
    dataType:'json',
    success: function(result)
    {
      if(result.success)
      {
      }
      else
      {
      }
    }
  })
})
$("#Agendamento_link").click(function(){
  $.ajax({
    url: "../Controller/Action_Rotas.php",
    method: "post",
    data: agendamento,
    dataType:'json',
    success: function(result)
    {
      if(result.success)
      {
      }
      else
      {
      }
    }
  })
})
$("#Funcionario_link").click(function(){
  $.ajax({
    url: "../Controller/Action_Rotas.php",
    method: "post",
    data: funcionario,
    dataType:'json',
    success: function(result)
    {
      if(result.success)
      {
      }
      else
      {
      }
    }
  })
})
$("#Prontuario_link").click(function(){
  $.ajax({
    url: "../Controller/Action_Rotas.php",
    method: "post",
    data: prontuario,
    dataType:'json',
    success: function(result)
    {
      if(result.success)
      {
      }
      else
      {
      }
    }
  })
})
$("#Clinicas_link").click(function(){
  $.ajax({
    url: "../Controller/Action_Rotas.php",
    method: "post",
    data: clinicas,
    dataType:'json',
    success: function(result)
    {
      if(result.success)
      {
      }
      else
      {
      }
    }
  })
})
$("#Dicom_link").click(function(){
  $.ajax({
    url: "../Controller/Action_Rotas.php",
    method: "post",
    data: dicom,
    dataType:'json',
    success: function(result)
    {
      if(result.success)
      {
      }
      else
      {
      }
    }
  })
})
$("#Pdf1_lin").click(function(){
  $.ajax({
    url: "../Controller/Action_Rotas.php",
    method: "post",
    data: pdf2,
    dataType:'json',
    success: function(result)
    {
      if(result.success)
      {
      }
      else
      {
      }
    }
  })
})
$("#Pdf2_link").click(function(){
  $.ajax({
    url: "../Controller/Action_Rotas.php",
    method: "post",
    data: pdf2,
    dataType:'json',
    success: function(result)
    {
      if(result.success)
      {
      }
      else
      {
      }
    }
  })
})
