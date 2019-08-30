import React, {Component} from 'react';
import { Link, withRouter } from "react-router-dom";
import api from "../../Services/api-login";
import { login } from "../../Services/auth";
import '../../css/login.css';

class Login extends Component {

    state = {
        nickname: "",
        senha: "",
        error: "",
    };

    handleSignIn = async e => {
        e.preventDefault();
        const { email, senha } = this.state;
        if (!email || !senha) {
            this.setState({ error: "Preencha seu email e senha para continuar!" });
        } else {
            try {
                const response = await api.get("http://localhost:8080/api/usuarios", { email, senha });
                login(response.data.token);
                this.props.history.push("/app");
            } catch (err) {
                this.setState({
                    error:
                        "Houve um problema com o login, verifique suas credenciais. T.T"
                });
            }
        }
    };

    render() {
        return(
            <div className="page-header clear-filter img-back " filter-color="blue">
                <div className="page-header-image" style={{backgroundImage: 'url("Login/download.png")'}} />
                <div className="content">
                    <div className="container">
                        <div className="col-md-4 ml-auto mr-auto">
                            <div className="card card-img-top card-plain">
                                {this.state.error && <p>{this.state.error}</p>}
                                <form onSubmit={this.handleSignIn} className="form" id="Login" method="post">
                                    <div className="card-header text-center">
                                        <div className="logo-container">
                                            <img className='img-logo' src="https://affinitymedicalclinic.ca/wp-content/uploads/2017/03/Affinity_Medical.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="input-group no-border input-lg">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                  <i className="now-ui-icons users_circle-08" />
                                                </span>
                                            </div>
                                            <input onChange={e => this.setState({ email: e.target.value })} type="text" id="user" name="nickname" className="form-control-login" placeholder="Email..." />
                                        </div>
                                        <div className="input-group no-border input-lg">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                  <i className="now-ui-icons text_caps-small" />
                                                </span>
                                            </div>
                                            <input onChange={e => this.setState({ senha: e.target.value })} type="password" id="senha" name="senha" placeholder="Senha..." className="form-control-login" />
                                        </div>
                                    </div>
                                    <div className="card-footer text-center">
                                        <button type="submit" id="logar" className="btn btn-primary button-login btn-round btn-lg btn-block">Login</button>
                                        <br/>
                                        <div className="pull-left">
                                            <h6>
                                                <Link to="/signup" id="Create" className="link">Criar uma Nova Conta</Link>
                                            </h6>
                                        </div>
                                        <div className="pull-right">
                                            <h6>
                                                <a href="#Modal" className="link">Need Help?</a>
                                            </h6>
                                        </div>
                                    </div></form>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <div className="container">
                        <nav>
                            <ul>
                                <li>
                                    <Link to='/System-Clinic'>
                                        New System Clinic
                                    </Link>
                                </li>
                                <li>
                                    <Link href>
                                        Sobre Nos
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </footer>
            </div>
        )
    }
}

export default withRouter(Login);
