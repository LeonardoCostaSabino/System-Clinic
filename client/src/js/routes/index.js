import React from 'react';
import PageContent from './PageContent';
import SideBar from '../components/SideBar';
import { HomeMenu } from './home';
import { GerenciamentoMenu } from './gerenciamento';
import { ConsultasMenu } from './consultas';                                                                                            
import { RelatoriosMenu } from './relatorios';
import { ExtrasMenu } from './extras';

export const Menu = (
  <SideBar>
    <SideBar.MenuSection title="General">
      { HomeMenu }
      { GerenciamentoMenu }
      { ConsultasMenu }
      { RelatoriosMenu }
      { ExtrasMenu }
    </SideBar.MenuSection>
  </SideBar>
);

export default PageContent
