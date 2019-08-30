import React, { Component , Fragment } from "react";
import imagem1 from '../../Images/Slide_1_home.jpeg';
import imagem2 from '../../Images/Slide_2_home.jpeg';
import imagem3 from '../../Images/Slide_3_home.jpeg';
import imagem4 from '../../Images/Atende.png';
import '../../css/home.css';
import axios from 'axios';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            nome: "",
            email: "",
            mensagem: "",
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(event);
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <Fragment>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={imagem1}
                             alt="Primeiro Slide"/>
                        <div className="carousel-caption d-none d-md-block mx-auto ">
                            <h5 >Seja Bem Vindo ao Nosso Sistema</h5>
                            <p >SEP - SYSTEM CLINIC</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={imagem2}
                             alt="Segundo Slide"/>
                        <div className="carousel-caption d-none d-md-block mx-auto ">
                            <h5 >Lorem ipsum dolor sit amet.</h5>
                            <p >SEP - SYSTEM CLINIC</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={imagem3}
                             alt="Terceiro Slide"/>
                        <div className="carousel-caption d-none d-md-block mx-auto ">
                            <h5 >Lorem ipsum dolor sit amet.</h5>
                            <p >SEP - SYSTEM CLINIC</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Anterior</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Próximo</span>
                </a>
            </div>
                <div className="container-fluid back">
                    <div className="row">
                        <div className="col-md-12 mt-3">
                            <h3 className="text-center">Bem vindos a nossa clinica</h3>
                            <p className="text-center"><em>Em caso de qualquer duvida, entre em contato com um de nossos atendentes</em></p>
                            <br />
                            <div className="row">
                                <div className="col-12 text-center">
                                    <address>
                                        <strong>Rio de Janeiro, BR</strong><br /> Telefone: (25) 27894315<br /> Email de contato : clinicFas@gmail.com<br />
                                    </address>
                                    <p><em>Caso queira entrar em contato, pode enviar um mensagem:</em></p>
                                    <form role="form"  method="post" className="form-row text-left">
                                        <div className="form-group col-md-3">
                                            <label className="mr-2">Nome:</label>
                                            <input type="email" className="form-control" onChange={this.handleInputChange} name="nome"  id="exampleInputEmail1" placeholder="Escreva seu Nome" />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label className="mr-2">Email:</label>
                                            <input type="email" className="form-control" onChange={this.handleInputChange} name="email" id="exampleInputPassword1" placeholder="Escreva seu Email" />
                                        </div>
                                        <div className="form-group col-md-5">
                                            <label className="mr-2">Mensagem:</label>
                                            <textarea className="form-control" name="mensagem" onChange={this.handleInputChange} id="exampleInputText1" placeholder="Digite sua mensagem" />
                                        </div>
                                        <button type="submit" className=" mx-auto text-center btn btn-info mb-3">ENVIAR</button>
                                        <br/>
                                        <br/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Home;