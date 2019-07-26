import React from 'react';
import logo from '../../images/logo.png';

class Form_login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email: "",
            senha: "",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit (event) {
        console.log(this.state);
        alert('Login está sendo efetuado..');
        event.preventDefault();

    }

    render(){
        return(
        <form className="form" id="Login" method="post">
            <div className="card-header text-center">
                <div className="logo-container">
                    <img src={logo}></img>
                </div>
            </div>
            <div className="card-body">
                <div className="input-group no-border input-lg">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="now-ui-icons users_circle-08"></i>
                        </span>
                    </div>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleInputChange} className="form-control" placeholder="Email ou CPF..."></input>
                </div>
                <div className="input-group no-border input-lg">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="now-ui-icons text_caps-small"></i>
                        </span>
                    </div>
                    <input type="password" name="senha" value={this.state.senha} onChange={this.handleInputChange} placeholder="Senha..." className="form-control" ></input>
                </div>
            </div>
            <div className="card-footer text-center">
                <a id="logar" onClick={this.handleSubmit} className="btn btn-primary btn-round btn-lg btn-block">Login</a>
                <div className="pull-left">
                    <h6>
                        <a id="Create" className="link">Create Account</a>
                    </h6>
                </div>
                <div className="pull-right">
                    <h6>
                        <a href="#Modal" className="link">Need Help?</a>
                    </h6>
                </div>
            </div>
        </form>
        )
    }
}

export default Form_login;
