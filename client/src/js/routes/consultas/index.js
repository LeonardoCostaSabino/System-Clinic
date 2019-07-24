import React from 'react'
import { Route } from 'react-router'
import Dashboard from '../home/dashboard-1/Dashboard'
import ConsultasMenu from './menu'

export default [
    <Route key="agendamento" path="/consultas/agendamento" component={Dashboard} />,
    <Route key="controle" path="/consultas/controle" component={Dashboard} />
];
export { ConsultasMenu }