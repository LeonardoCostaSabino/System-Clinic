import React from 'react';

import {Route, NavLink, HashRouter} from "react-router-dom";

import '../../css/sidebar.css';
import $ from "jquery";

class SideBar extends React.Component{

    componentDidMount() {
        $(".sidebar-dropdown > a").click(function() {
            $(".sidebar-submenu").slideUp(200);
            if (
                $(this)
                    .parent()
                    .hasClass("active")
            ) {
                $(".sidebar-dropdown").removeClass("active");
                $(this)
                    .parent()
                    .removeClass("active");
            } else {
                $(".sidebar-dropdown").removeClass("active");
                $(this)
                    .next(".sidebar-submenu")
                    .slideDown(200);
                $(this)
                    .parent()
                    .addClass("active");
            }
        });

        $("#close-sidebar").click(function() {
            $(".page-wrapper").removeClass("toggled");
        });
        $("#show-sidebar").click(function() {
            $(".page-wrapper").addClass("toggled");
        });
    }

    render() {
        return(
            <div className="page-wrapper chiller-theme toggled">
                <a id="show-sidebar" className="btn btn-sm btn-dark">
                    <i className="fas fa-bars" />
                </a>
                <nav id="sidebar" className="sidebar-wrapper">
                    <div className="sidebar-content">
                        <div className="sidebar-brand">
                            <a>System SPE</a>
                            <div id="close-sidebar">
                                <i className="fas fa-times" />
                            </div>
                        </div>
                        <div className="sidebar-header">
                            <div className="user-pic">
                                <img className="img-responsive img-rounded" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg" alt="User picture" />
                            </div>
                            <div className="user-info">
                <span className="user-name">Nome
                  <strong>Usuário</strong>
                </span>
                                <span className="user-role">Tipo de Acesso</span>
                                <span className="user-status">
                  <i className="fa fa-circle" />
                  <span>Status</span>
                </span>
                            </div>
                        </div>
                        <div className="sidebar-menu">
                            <ul>
                                <li className="header-menu">
                                    <span>General</span>
                                </li>
                                <li className="text-center">
                                    <NavLink to="/">
                                        <i className="float-left fa fa-tachometer-alt" />
                                        <h4>Home</h4>
                                    </NavLink>
                                </li>
                                <li className="text-center sidebar-dropdown">
                                    <a>
                                        <i className="float-left fa fa-shopping-cart" />
                                        <h5>Formulários</h5>
                                    </a>
                                    <div className="sidebar-submenu">
                                        <ul>
                                            <li>
                                                <NavLink to="/forms/pacientes">Pacientes</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/forms/funcionarios">Funcionários</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/forms/consultas">Consultas</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/forms/prontuarios">Prontuários</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="text-center sidebar-dropdown">
                                    <a>
                                        <i className="float-left far fa-gem" />
                                        <h5>Components</h5>
                                    </a>
                                    <div className="sidebar-submenu">
                                        <ul>
                                            <li>
                                                <a>General</a>
                                            </li>
                                            <li>
                                                <a>Panels</a>
                                            </li>
                                            <li>
                                                <a>Tables</a>
                                            </li>
                                            <li>
                                                <a>Icons</a>
                                            </li>
                                            <li>
                                                <a>Forms</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="sidebar-dropdown">
                                    <a className="text-center">
                                        <i className="float-left fa fa-chart-line" />
                                        <h5>Relatórios</h5>
                                    </a>
                                    <div className="sidebar-submenu">
                                        <ul>
                                            <li>
                                                <a>Relatório 1</a>
                                            </li>
                                            <li>
                                                <a>Relatório 2</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="sidebar-dropdown">
                                    <a>
                                        <i className="float-left fa fa-globe" />
                                        <h5>Extras</h5>
                                    </a>
                                    <div className="sidebar-submenu">
                                        <ul>
                                            <li>
                                                <a href="#">Google maps</a>
                                            </li>
                                            <li>
                                                <a href="#">Open street map</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="header-menu">
                                    <span>Extra</span>
                                </li>
                                <li className="float-left">
                                    <a>
                                        <i className="fa fa-book" />
                                        <span>Documentation</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* sidebar-menu  */}
                    </div>
                    {/* sidebar-content  */}
                    <div className="sidebar-footer">
                        <a href="#">
                            <i className="fa fa-bell" />
                            <span className="badge badge-pill badge-warning notification">3</span>
                        </a>
                        <a href="#">
                            <i className="fa fa-envelope" />
                            <span className="badge badge-pill badge-success notification">7</span>
                        </a>
                        <a href="#">
                            <i className="fa fa-cog" />
                            <span className="badge-sonar" />
                        </a>
                        <a href="#">
                            <i className="fa fa-power-off" />
                        </a>
                    </div>
                </nav>
            </div>
        )
    }
}
export default SideBar;