import React from 'react'
import { GroupMenuItem, MenuItem } from '../../components/SideBar'

const Menu = (
    <GroupMenuItem title="Consultas" icon="search-plus">
        <MenuItem title="Agendamento" icon="calendar" to="/consultas/agendamento" />
        <MenuItem title="Controle de Consultas" icon="desktop" to="/consultas/controle"/>
    </GroupMenuItem> 
)

export default Menu