import React, { Component } from "react";
import '../../css/header.css';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="">
                {/*Área para possivel divulgação de patrocinadores*/}
                {/*<header className="topbar">*/}
                {/*    <div className="container">*/}
                {/*        <div className="row">*/}
                {/*            <div className="col-sm-12">*/}
                {/*                <ul className="social-network">*/}
                {/*                    <li><a className="waves-effect waves-dark" href="#">*/}
                {/*                        <i className="fab fa-facebook-f"></i></a></li>*/}
                {/*                    <li><a className="waves-effect waves-dark" href="#">*/}
                {/*                        <i className="fa fa-twitter"></i></a></li>*/}
                {/*                    <li><a className="waves-effect waves-dark" href="#">*/}
                {/*                        <i className="fa fa-linkedin"></i></a></li>*/}
                {/*                    <li><a className="waves-effect waves-dark" href="#">*/}
                {/*                        <i className="fa fa-pinterest"></i></a></li>*/}
                {/*                    <li><a className="waves-effect waves-dark" href="#">*/}
                {/*                        <i className="fa fa-google-plus"></i></a></li>*/}
                {/*                </ul>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</header>*/}
                <nav className="navbar navbar-expand-lg navbar-dark mx-background-top-linear">
                    <div className="container">
                        <Link className="navbar-brand" to="/"
                           style={{texttransform: "uppercase"}}> SEP System-Clinic</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Pagina Inicial
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/agendamento">Agendamento</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/forms">Cadastros</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/relatorios">Relatórios</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/genrenciamento">Gerenciamento</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/historia">Sobre Nós</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;