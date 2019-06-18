create table Pacientes (
    cpf_Paciente int unique PRIMARY KEY , --CPF Paciente
    nm_Paciente varchar(75) not null , --Nome do Paciente
    rg_Paciente varchar (75) , --RG do paciente
    date_nasc_Paciente date , --Data de Nascimento do paciente
    tel_Paciente int, --Telefone do Paciente
    email_Paciente varchar(50) unique not null , --Email de registro do Paciente
    senha_Paciente varchar(25) unique not null , --Senha de registro do Paciente
    Grupo int references Grupos_de_Permissao(idgrupos)  --Grupo de Permissão do qual pertence
)

create table Grupos_de_Permissao (
      idGrupos int PRIMARY KEY not null, --Id de registro do grupo
      nm_Grupo varchar(45) not null, --Nome do grupo criado
      Desc_grupo varchar(255) --Descrição das atividades e permissões
)

create table Prontuário (
  idProntuário int PRIMARY KEY not null , --Id de registro do grupo
  Medico int references medicos(crm_Medico) ,  -- Nome do médico responsavel
  Paciente int references Pacientes(cpf_Paciente) , --Nome do Paciente atendido
  Consultas int references  consultas(idconsultas) , --Quantidade de consultas que o paciente realizou
  des_Resultado varchar (255) , --Descrição do Prontuário
  nm_limitação varchar(45) , --Nome de alguma Limitação do paciente
  nm_Alergia varchar(45) ,  --Nome de alguma Alergia do paciente
)

create table Funcionários (
  cpf_Funcionário int not null unique unique PRIMARY KEY , --Cpf dos Funcionário
  nm_Funcionário varchar(75) not null , --Nome dos Funcionário
  rg_Funcionário int unique not null unique , --Rg dos Funcionário
  cargo_Funcionário varchar (45) not null , --Cargo do Funcionário
  loga_Funcionário varchar (100) , --Logradouro do Funcionário
  bairro_Funcionário varchar (50) , --Bairro do Funcionário
  cidade_Funcionário varchar (45) , --Cidade do Funcionário
  muni_Funcionário varchar (45) , --Municipio do Funcionário
  estado_Funcionário varchar (30) , --Estado do Funcionário
  cep_Funcionário int not null , --Cep do Funcionário
  tel_Funcionário int , --Telefone do Funcionário
  user_Funcionário varchar (50) , --Usuário do Funcionário
  email_Funcionário varchar (75) , --Email de registro do Funcionário
  senha_Funcionário varchar (25), --Senha de registro do Funcionário
  Grupo int references Grupos_de_Permissao(idgrupos)  --Grupo de Permissão do qual pertence
)

create table Medicos (
  crm_Medico int not null unique PRIMARY KEY, --CRM do médico
  nm_Medico varchar (75) not null , --Nome do Médico
  cpf_Medico int not null unique , --Cpf do Médico
  rg_Medico int not null unique , --Rg do Médico
  espec_Medico varchar (45) not null , --Especialidade do Médico
  user_Medico varchar (45) not null , --Usuário do Médico
  senha_Medico varchar (25) not null , --Senha do Médico
  Grupo int references Grupos_de_Permissao(idgrupos)  --Grupo de Permissão do qual pertence
)

create table Consultas (
  idConsultas int not null unique PRIMARY KEY , --Id de Consultas
  data_Consulta date not null , --Data em que foi marcada a consulta
  hora time not null , --Hora em que foi marcada a consulta
  Medico int references Medicos(crm_Medico) ,  -- Nome do médico responsavel
  Paciente int references Pacientes(cpf_Paciente) --Nome do Paciente atendido
)
