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
                <h2 className="text-center">Gerenciamento do Sistema</h2>
                <div className="row">
                    <div className="col-md"/>
                    {/*<div className="col-md btn-group btn-group-toggle" data-toggle="buttons">*/}
                    {/*    /!*<NavLink to="/forms/pacientes" type="button" className="btn btn-primary btn-lg">Pacientes</NavLink>*!/*/}
                    {/*    /!*<NavLink to="/forms/funcionarios" type="button" className="btn btn-secondary btn-lg">Funcionários</NavLink>*!/*/}
                    {/*    /!*<NavLink to="/forms/consultas" type="button" className="btn btn-secondary btn-lg">Consultas</NavLink>*!/*/}
                    {/*    /!*<NavLink to="/forms/prontuarios" type="button" className="btn btn-secondary btn-lg">Prontuários</NavLink>*!/*/}
                    {/*</div>*/}
                    {/*<div className="col-md"/>*/}
                </div>
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