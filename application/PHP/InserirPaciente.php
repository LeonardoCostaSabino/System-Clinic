<?php

$Nome = $_POST["NomeC_Pacientes"];
$Cpf = $_POST["CPF_Pacientes"];
$Rg = $_POST["RG_Pacientes"];
$Genero = $_POST["Genero_Pacientes"];
$DataN = $_POST["Nasce_Pacientes"];
$Idade = $_POST["Idade_Pacientes"];
$Tel = $_POST["tel_Pacientes"];
$Email = $_POST["email_Pacientes"];
$Senha = $_POST["Senha_Pacientes"];
$Peso = $_POST["Peso_Pacientes"];
$Altura = $_POST["Altura_Pacientes"];
$TipoS = $_POST["Tipo_Pacientes"];
$Fila1 = $_POST["Filiacao1_Pacientes"];
$Fila2 = $_POST["Filiacao2_Pacientes"];

$minhaConexao = New Conexao();

$sql = "insert into pacientes (nm_Paciente, cpf_Paciente, rg_Paciente, gn_Paciente,
date_nasc_Paciente, idade_Paciente, tel_Paciente, email_Paciente, senha_Paciente,
Peso_Paciente, Altura_Paciente, TipoSangue_Paciente, Filiação1_Paciente, Filiação2_Paciente)
values (:Nome, :Cpf, :Rg, :Genero, :DataN, :Idade, :Tele, :Email, :Senha, :Peso, :Altura, :TipoS, :Fila1, :Fila2)";
$insert = $minhaConexao->con->prepare($sql);
$insert->execute(array(
  ':Nome' => $Nome,
  ':Cpf' => $Cpf,
  ':Rg' => $Rg,
  ':Genero' => $Genero,
  ':DataN' => $DataN,
  ':Idade' => $Idade,
  ':Tele' => $Tel,
  ':Email' => $Email,
  ':Senha' => $Senha,
  ':Peso' => $Peso,
  ':Altura' => $Altura,
  ':TipoS' => $TipoS,
  ':Fila1' => $Fila1,
  ':Fila2' => $Fila2
));



?>
