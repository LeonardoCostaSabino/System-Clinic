import React from 'react';
import { Route } from 'react-router';
import Dash from '../home/dashboard-1/Dashboard';
import RelatoriosMenu from './menu';

export default [
    <Route key="prova" path="/relatorios/prova" component={Dash} />,
    <Route key="provb" path="/relatorios/provb" component={Dash} />
]
export { RelatoriosMenu }