import React, { Component } from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import Paciente from '../Forms/Paciente';
import Funcionario from '../Forms/Funcionario';
import Consultas from '../Forms/Consulta';
import Prontuarios from '../Forms/Prontuario';

class Forms extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12" >
                        <Route exact path="/forms/pacientes" component={Paciente}/>
                        <Route path="/forms/funcionarios" component={Funcionario}/>
                        <Route path="/forms/consultas" component={Consultas}/>
                        <Route path="/forms/prontuarios" component={Prontuarios}/>
                    </div>
                </div>

            </div>
        );
    }
}

export default Forms;