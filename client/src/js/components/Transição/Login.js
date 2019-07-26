import React from 'react';
import '../css/Login.css';
import Form_Login from './f_Login';

class Login extends React.Component {

    render(){
        return(
        <div className="login-page sidebar-collapse">
            <div className="page-header clear-filter">
                <div className="page-header-image imgLogin"></div>
                <div className="content">
                    <div className="container">
                        <div className="col-md-4 ml-auto mr-auto">
                            <div className="card card-login card-plain">
                                <h2 id="MensagemErro">Usuário ou senha errados!</h2>
                                <Form_Login />
                            </div>
                        </div>
                    </div>
                </div>
            <div className="footer">
                <div className="container">
                    <nav>
                        <ul>
                            <li>
                                <a href="">
                                New System Clinic
                                </a>
                            </li>
                            <li>
                                <a href="">
                                Sobre Nos
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
        )
    }
}

export default Login;
