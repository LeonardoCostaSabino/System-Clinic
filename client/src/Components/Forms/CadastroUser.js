import React, { Component, Fragment } from 'react';
import { Link, withRouter } from "react-router-dom";
import '../../css/caduser.css'
import api from '../../Services/api-login'
import Logo from '../../Images/imageedit_6_8351019904.png'
import axios from 'axios';

class CadastroUser extends Component {
    state = {
        nickname: "",
        email: "",
        senha: "",
        acesso_id: "1",
        error: ""
    };

    handleSubmit = async e => {
        e.preventDefault();
        const { nickname, email, senha, acesso_id} = this.state;
        if (!nickname || !email || !senha){
            this.setState({error: "Preencha todos os dados para se cadastrar"});
        }else {
            try{
                await api.post("http://localhost:8080/api/usuarios", {nickname, email, senha, acesso_id});
                this.props.history.push("/");
            }catch (err) {
                console.log(err);
                this.setState({error: "Ocorreu um erro ao registrar sua conta. T.T"});
            }
        }
    };

    render() {
        return(
            <Fragment>
                <div id="login">
                    <img id="log" src={Logo} alt="Logo SEP"/>
                    <div className="container">
                        <div id="login-row" className="row justify-content-center align-items-center">
                            <div id="login-column" className="col-md-6">
                                <div id="login-box" className="col-md-12">
                                    {this.state.error && <p>{this.state.error}</p>}

                                    <form onSubmit={this.handleSubmit} id="login-form" className="form" action="" method="post">
                                        <h3 className="text-center text-info">Login</h3>
                                        <div className="form-group">
                                            <label htmlFor="username" className="text-info">Nome de Usuário:</label><br/>
                                            <input type="text" className="form-control" onChange={e => this.setState({ nickname: e.target.value })} name="nickname" placeholder="Nome de Usuário..." />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="text-info">Email:</label><br/>
                                            <input type="text" className="form-control" onChange={e => this.setState({ email: e.target.value })} name="email" placeholder="Email..." />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="text-info">Senha:</label><br/>
                                            <input type="password" className="form-control" onChange={e => this.setState({ senha: e.target.value })} name="senha" placeholder="Senha..." />
                                            <button type="submit" className="btn btn-primary">Cadastrar</button>
                                            <hr />
                                            {/*<Link to="/">Fazer Login</Link>*/}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(CadastroUser);