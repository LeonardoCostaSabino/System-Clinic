import React from 'react';
import { Route } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import { XPanel, PageTitle } from '../../components';
import { GroupMenuItem, MenuItem } from '../../components/SideBar';
import ClinicasFormFactory from './clinicas/index';
import FuncionariosFormFactory from './funcionarios';
import PacientesFormFactory from './pacientes';
import ProntuarioFormFactory from './prontuario';
import DicomFormFactory from './dicom'; 
import FormsMenuFactory from './Menu';

const ClinicasForm = ClinicasFormFactory(React, Row, Col, XPanel, PageTitle);
const FuncionariosForm = FuncionariosFormFactory(React, Row, Col, XPanel, PageTitle);
const PacientesForm = PacientesFormFactory(React, Row, Col, XPanel, PageTitle);
const ProntuarioForm = ProntuarioFormFactory(React, Row, Col, XPanel, PageTitle);
const DicomForm = DicomFormFactory(React, Row, Col, XPanel, PageTitle);

const GerenciamentoMenu = FormsMenuFactory(React, GroupMenuItem, MenuItem);


export default [
  <Route key="clinicas" path="/gerenciamento/clinicas" component={ ClinicasForm }/>,
  <Route key="funcionarios" path="/gerenciamento/funcionarios" component={ FuncionariosForm }/>,
  <Route key="pacientes" path="/gerenciamento/pacientes" component={ PacientesForm }/>,
  <Route key="prontuarios" path="/gerenciamento/prontuarios" component={ ProntuarioForm }/>,
  <Route key="dicom" path="/gerenciamento/dicom" component={ DicomForm }/>
]

export { GerenciamentoMenu }
