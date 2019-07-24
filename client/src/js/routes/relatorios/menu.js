import React from 'react';
import { GroupMenuItem, MenuItem } from '../../components/SideBar';

const Menu = (
    <GroupMenuItem title="Relatórios" icon="book">
        <MenuItem title="Prov-A" icon="file-text" to="/relatorios/prova"/>
        <MenuItem title="Prov-B" icon="file-text" to="/relatorios/provb"/>       
    </GroupMenuItem>
)

export default Menu