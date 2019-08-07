import React, {Fragment} from 'react';
import {Col, Row } from 'react-bootstrap';
import InputMask from 'react-input-mask';
import moment from 'moment';
import 'moment/locale/pt'
import 'rc-datepicker/lib/style.css';
import { DatePickerInput } from 'rc-datepicker';
import Swal from 'sweetalert2'
import axios from 'axios';

moment.locale('pt-br');

export default class CadForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            nome: "",
            cpf: "",
            rg: "",
            datanascimento: "",
            genero: "",
            telefone: "",
            celular: "",
            cep: "",
            estado: "",
            bairro: "",
            logradouro:"",
            nickname: "",
            senha: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.responde = this.responde.bind(this);
        this.submit = this.submit.bind(this);
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

    responde(){
        console.log(this.state);
    }

    submit(event){
        const data = this.state;
        axios.post('http://localhost:8080/api/pacientes',{data})
            .then(response => {
                console.log(data)
            })
        Swal.fire({
            title: 'Parabens',
            type: 'success',
            text: 'Cadastro Realizado com sucesso!'
        });
        event.preventDefault()
    }

    render(){
        return(
            <Fragment>
                <Row>
                    <form id="form-cad" onSubmit={this.submit} method="post">
                        <Col xs={4}>
                            <label>Nome Completo </label>
                            <InputMask placeholder="Nome Completo..." name="nome" className="form-control"  onChange={this.handleInputChange}/>
                        </Col>
                        <Col xs={2}>
                            <label>CPF</label>
                            <InputMask mask="999.999.999-99" maskChar="_" placeholder="CPF..." name="cpf" className="form-control"  onChange={this.handleInputChange}/>
                        </Col>
                        <Col xs={2}>
                            <label>RG</label>
                            <InputMask mask="99.999.999-9" maskChar="_" placeholder="RG..." name="rg" className="form-control"  onChange={this.handleInputChange}/>
                        </Col>
                        <Col xs={4}>
                            <label>Data de Nascimento</label>
                            <DatePickerInput displayFormat='DD/MM/YYYY' onChange={(jsDate, dateString) => this.setState({ datanascimento: dateString })} showOnInputClick locale='pt-BR' />
                        </Col>
                        <Col xs={2}>
                            <input type="radio" value="Masculino" name="genero" onChange={this.handleInputChange}/>
                            <label> Masculino</label>
                            <br/>
                            <input type="radio" value="Feminino" name="genero" onChange={this.handleInputChange}/>
                            <label> Feminino</label>
                        </Col>
                        <Col xs={3}>
                            <label>Telefone</label>
                            <InputMask mask="(99) 9999-9999" maskChar="_" placeholder="Telefone..." name="telefone" className="form-control" onChange={this.handleInputChange}/>
                        </Col>
                        <Col xs={3}>
                            <label>Celular</label>
                            <InputMask mask="(99) 99999-9999" maskChar="_" placeholder="Celular..." name="celular" className="form-control" onChange={this.handleInputChange}/>
                        </Col>
                        <Col xs={4}>
                            <label>Cep</label>
                            <InputMask mask="99999-999" maskChar="_" placeholder="Cep.." name="cep" className="form-control" onChange={this.handleInputChange}/>
                        </Col>
                        <Col xs={2}>
                            <label>UF</label>
                            <input readOnly placeholder="Estado..." name="estado" className="form-control" onChange={this.handleInputChange}/>
                        </Col>
                        <Col xs={3}>
                            <label>Cidade</label>
                            <input readOnly placeholder="Cidade" name="cidade" className="form-control" onChange={this.handleInputChange}/>
                        </Col>
                        <Col xs={3}>
                            <label>Bairro</label>
                            <input readOnly placeholder="Bairro" name="bairro" className="form-control" onChange={this.handleInputChange}/>
                        </Col>
                        <Col xs={4}>
                            <label>Logradouro</label>
                            <input readOnly placeholder="Logradouro" name="logradouro" className="form-control" onChange={this.handleInputChange}/>
                        </Col>
                        <Col xs={2}></Col>

                        <Col xs={4}>
                            <label>Nome do Usuário</label>
                            <input placeholder="Apelido..." name="nickname" className="form-control" onChange={this.handleInputChange}/>
                        </Col>
                        <Col xs={4}>
                            <label>Senha</label>
                            <input placeholder="" type="password" name="senha" className="form-control" onChange={this.handleInputChange}/>
                        </Col>

                        <Col xs={2}></Col>
                        <Row>
                            <Col xs={5}>
                            </Col>
                            <Col xs={3}>
                                <br/>
                                <button type="submit" className="btn btn-primary">Cadastrar</button>
                                <button type="reset" className="btn btn-dark">Limpar</button>
                            </Col>
                            <Col xs={4}>
                            </Col>
                        </Row>
                    </form>
                </Row>
    </Fragment>
    )
    }
}


