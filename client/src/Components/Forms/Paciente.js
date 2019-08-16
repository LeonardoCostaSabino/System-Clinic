import React, {Fragment} from 'react';
import {Col, Row } from 'react-bootstrap';
import InputMask from 'react-input-mask';
import moment from 'moment';
import 'moment/locale/pt'
import 'rc-datepicker/lib/style.css';
import { DatePickerInput } from 'rc-datepicker';
import Swal from 'sweetalert2'
import axios from 'axios';
import '../../css/card.css';

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
            ddd: "",
            telefone: "",
            celular: "",
            cep: "",
            estado: "",
            bairro: "",
            logradouro:"",
            nickname: "",
            senha: "",
            peso: "",
            altura: "",
            sangue: "",
            filiacao1: "",
            filiacao2: "",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.pesquisa_cep = this.pesquisa_cep.bind(this);
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

    pesquisa_cep() {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        });
        var validacep = /^[0-9]{8}$/;
        console.log(this.state.cep);
        if (validacep.test(this.state.cep)) {
            fetch('https://viacep.com.br/ws/' + this.state.cep + '/json/').then(result => {
                return result.json()
            }).then(data => {
                Toast.fire({
                    type: 'success',
                    title: 'Cep encontrado!!!'
                });
                this.state.logradouro = data.logradouro;
                this.state.bairro = data.bairro;
                this.state.cidade = data.localidade;
                this.state.uf = data.uf;
                document.getElementById('logra').value= data.logradouro;
                document.getElementById('bairro').value= data.bairro;
                document.getElementById('cidade').value= data.localidade;
                document.getElementById('uf').value= data.uf;
            }).catch(err => console.warn(err));
        } else {
            Swal.fire({
                title: 'Cep Incorreto',
                type: 'error',
                text: 'Por favor digite um cep válido!'
            });
        }
    }

    submit(event){
        event.preventDefault();
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 5000
        });

        var validarNome;
        var validarCPF;
        var validarData;
        var validarDDD;
        var validarTel;
        var validarCel;
        var validarCep;
        var validarUser;
        var validarSenha;
        if (this.state.nome == null || this.state.nome === ""){
            validarNome = 'Campo de Nome<br>'
        }
        else{
            validarNome = ''
        }
        if(this.state.cpf == null || this.state.cpf ===""){
            validarCPF = 'Campo de Cpf<br>'
        }else{
            validarCPF = ''
        }
        if(this.state.datanascimento == null || this.state.datanascimento === ""){
            validarData = 'Campo de Data de Nascimento<br>'
        }else{
            validarData = ""
        }
        if(this.state.ddd == null || this.state.ddd === ""){
            validarDDD = 'Campo de DDD<br>'
        }else{
            validarDDD = ""
        }
        if(this.state.telefone == null || this.state.telefone === ""){
            validarTel = 'Campo de Telefone<br>'
        }else {
            validarTel = ""
        }
        if(this.state.celular == null || this.state.celular === ""){
            validarCel = 'Campo de Celular<br>'
        }else {
            validarCel = ""
        }
        if(this.state.cep == null || this.state.cep === ""){
            validarCep = 'Campo de Cep<br>'
        }else {
            validarCep = ""
        }
        if(this.state.nickname == null || this.state.nickname === ""){
            validarUser = 'Campo de Usuário<br>'
        }else {
            validarUser = ""
        }
        if(this.state.senha == null || this.state.senha === ""){
            validarSenha = 'Campo de Senha<br>'
        }else {
            validarSenha = ""
        }
        Toast.fire({
            type: 'error',
            title: "Os campos não podem estar vazios: <br>"+validarNome +
                validarCPF + validarData
                + validarDDD + validarTel
                + validarCel + validarCep
                + validarUser + validarSenha
        });
        if (validarNome !== "" ||
            validarCPF !== "" ||
            validarData !== "" ||
            validarDDD !== "" ||
            validarTel !== "" ||
            validarCel !== "" ||
            validarCep !== "" ||
            validarUser !== "" ||
            validarSenha !== ""
        ){
            return 0;
        }
        var regexCpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
        if (this.state.cpf.match(regexCpf)){
            Toast.fire({
                type: 'error',
                title: "Cpf Errado"
            });
        }else {
            return 0;
        }

        let form = JSON.stringify({
            cpf: this.state.cpf,
            rg: this.state.rg,
            nome: this.state.nome,
            genero: this.state.genero,
            datanascimento: this.state.datanascimento,
            logradouro: this.state.logradouro,
            bairro: this.state.bairro,
            cidade: this.state.cidade,
            uf: this.state.uf,
            cep: this.state.cep,
            ddd: this.state.ddd,
            telefone: this.state.telefone,
            celular: this.state.celular,
            peso: this.state.peso,
            altura: this.state.altura,
            sangue: this.state.sangue,
            filiacao1: this.state.filiacao1,
            filiacao2: this.state.filiacao2,
            nickname: this.state.nickname,
            email: this.state.email,
            senha: this.state.senha,
            acesso_id: "1"
        });

        axios.post('http://localhost:8080/api/pacientes',form,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(
                Swal.fire({
                    title: 'Error de Cadastro',
                    type: 'error',
                    text: 'Cadastro não pode ser efetuado!'
                })
            ).catch(
                Swal.fire({
                    title: 'Parabens',
                    type: 'success',
                    text: 'Cadastro Realizado com sucesso!'
                })
        );
    }
    render(){
        return(
            <Fragment>
                <div className="card mt-3">
                    <div className="text-center card-header cardbyhead">
                        Cadastro de Pacientes
                    </div>
                    <div className="card-body cardby">
                        <div className="row">
                            <form id="form-cad" className="form-row" onSubmit={this.submit} method="post">
                                <div className="col-sm-3">
                                    <label>Nome Completo </label>
                                    <InputMask placeholder="Nome Completo..." name="nome" className="form-control"  onChange={this.handleInputChange}/>
                                </div>
                                <div className="col-sm-2">
                                    <label>CPF</label>
                                    <InputMask mask="999.999.999-99" maskChar="_" placeholder="CPF..." name="cpf" className="form-control"  onChange={this.handleInputChange}/>
                                </div>
                                <div className="col-sm-2">
                                    <label>RG</label>
                                    <InputMask mask="99.999.999-9" maskChar="_" placeholder="RG..." name="rg" className="form-control"  onChange={this.handleInputChange}/>
                                </div>
                                <div className="col-sm-4">
                                    <label>Data de Nascimento</label>
                                    <DatePickerInput displayFormat='DD/MM/YYYY' onChange={(jsDate, dateString) => this.setState({ datanascimento: dateString })} showOnInputClick locale='pt-BR' />
                                </div>
                                <div className="col-sm-2 mt-3">
                                    <label>Peso</label>
                                    <InputMask mask="999" maskChar="_" placeholder="Peso..." name="peso" className="form-control"  onChange={this.handleInputChange}/>
                                </div>
                                <div className="col-sm-2 mt-3">
                                    <label>Altura</label>
                                    <InputMask mask="9,99" maskChar="_" placeholder="Altura em metros..." name="altura" className="form-control"  onChange={this.handleInputChange}/>
                                </div>
                                <div className="col-sm-1 mt-3">
                                    <label>Sangue</label>
                                    <select className="form-control" name="sangue" onChange={this.handleInputChange}>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="A-">B-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                    </select>
                                </div>
                                <div className="col-sm-3 mt-3">
                                    <label>Filiação 1</label>
                                    <input  placeholder="Filiação..." name="filiacao1" className="form-control" onChange={this.handleInputChange}/>
                                </div>
                                <div className="col-sm-3 mt-3">
                                    <label>Filiação 2</label>
                                    <input  placeholder="Filiação..." name="filiacao2" className="form-control" onChange={this.handleInputChange}/>
                                </div>
                                <div  className=" form-check-inline col-sm-2">
                                    <input type="radio" value="Masculino" name="genero" onChange={this.handleInputChange}/>
                                    <label> Masculino </label>
                                    <br/>
                                    <input type="radio" value="Feminino" name="genero" onChange={this.handleInputChange}/>
                                    <label> Feminino </label>
                                </div>
                                <div className="col-sm-1 mt-3">
                                    <label>DDD</label>
                                    <select className="form-control" name="ddd" onChange={this.handleInputChange}>
                                        <option></option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="31">31</option>
                                        <option value="32">32</option>
                                        <option value="33">33</option>
                                        <option value="34">34</option>
                                        <option value="35">35</option>
                                        <option value="36">36</option>
                                        <option value="37">37</option>
                                        <option value="38">38</option>
                                        <option value="39">39</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                        <option value="32">32</option>
                                        <option value="33">33</option>
                                        <option value="34">34</option>
                                        <option value="35">35</option>
                                        <option value="36">36</option>
                                        <option value="37">37</option>
                                        <option value="38">38</option>
                                        <option value="39">39</option>
                                        <option value="41">41</option>
                                        <option value="42">42</option>
                                        <option value="43">43</option>
                                        <option value="44">44</option>
                                        <option value="45">45</option>
                                        <option value="46">46</option>
                                        <option value="47">47</option>
                                        <option value="48">48</option>
                                        <option value="49">49</option>
                                        <option value="51">51</option>
                                        <option value="52">52</option>
                                        <option value="53">53</option>
                                        <option value="54">54</option>
                                        <option value="55">55</option>
                                        <option value="56">56</option>
                                        <option value="57">57</option>
                                        <option value="58">58</option>
                                        <option value="59">59</option>
                                        <option value="61">61</option>
                                        <option value="62">62</option>
                                        <option value="63">63</option>
                                        <option value="64">64</option>
                                        <option value="65">65</option>
                                        <option value="66">66</option>
                                        <option value="67">67</option>
                                        <option value="68">69</option>
                                        <option value="71">71</option>
                                        <option value="72">72</option>
                                        <option value="73">73</option>
                                        <option value="74">74</option>
                                        <option value="75">75</option>
                                        <option value="76">76</option>
                                        <option value="77">77</option>
                                        <option value="78">78</option>
                                        <option value="79">79</option>
                                        <option value="81">81</option>
                                        <option value="82">82</option>
                                        <option value="83">83</option>
                                        <option value="84">84</option>
                                        <option value="85">85</option>
                                        <option value="86">86</option>
                                        <option value="87">87</option>
                                        <option value="88">88</option>
                                        <option value="89">89</option>
                                        <option value="91">91</option>
                                        <option value="92">92</option>
                                        <option value="93">93</option>
                                        <option value="94">94</option>
                                        <option value="95">95</option>
                                        <option value="96">96</option>
                                        <option value="97">97</option>
                                        <option value="98">98</option>
                                        <option value="99">99</option>
                                    </select>
                                </div>
                                <div className="col-sm-2 mt-3">
                                    <label>Telefone</label>
                                    <InputMask mask="9999-9999" maskChar="_" placeholder="Telefone..." name="telefone" className="form-control" onChange={this.handleInputChange}/>
                                </div>
                                <div className="col-sm-2 mt-3">
                                    <label>Celular</label>
                                    <InputMask mask="99999-9999" maskChar="_" placeholder="Celular..." name="celular" className="form-control" onChange={this.handleInputChange}/>
                                </div>
                                <div className="col-md-3 mt-3"></div>
                                <div className="col-sm-2 mt-3">
                                    <label>Cep</label>
                                    <InputMask mask="99999999" maskChar="_" id="cep" placeholder="Cep.." name="cep" className="form-control" onBlur={this.pesquisa_cep} onChange={this.handleInputChange}/>
                                </div>
                                <div className="col-md-10 mt-3"></div>
                                <div className="col-sm-4 mt-3">
                                    <label>Logradouro</label>
                                    <input readOnly placeholder="Logradouro" name="logradouro" id="logra" className="form-control" onChange={this.handleInputChange}/>
                                </div>
                                <div className="col-sm-3 mt-3">
                                    <label>Bairro</label>
                                    <input readOnly placeholder="Bairro" name="bairro" id="bairro" className="form-control" onChange={this.handleInputChange}/>
                                </div>
                                <div className="col-sm-3 mt-3">
                                    <label>Cidade</label>
                                    <input readOnly placeholder="Cidade" name="cidade" id="cidade" className="form-control" onChange={this.handleInputChange}/>
                                </div>
                                <div className="col-sm-1 mt-3">
                                    <label>UF</label>
                                    <input readOnly placeholder="Estado..." name="uf" id="uf" className="form-control" onChange={this.handleInputChange}/>
                                </div>
                                <div className="col-sm-2 mt-3">
                                    <label>Nome do Usuário</label>
                                    <input placeholder="Apelido..." name="nickname" className="form-control" onChange={this.handleInputChange}/>
                                </div>
                                <div className="col-sm-2 mt-3">
                                    <label>Email</label>
                                    <input placeholder="Email..." name="email" className="form-control" onChange={this.handleInputChange}/>
                                </div>
                                <div className="col-sm-2 mt-3">
                                    <label>Senha</label>
                                    <input placeholder="Senha..." type="password" name="senha" className="form-control" onChange={this.handleInputChange}/>
                                </div>
                                <button type="submit" className="btn btn-lg btn-block btn-primary mt-3">Cadastrar</button>
                                <button type="reset" className="btn btn-lg btn-block btn-dark">Limpar</button>
                            </form>
                        </div>
                    </div>
                    <div class="cardbyhead text-center card-footer text-muted">
                        Sistema de Gerenciamento de Clinicas SEB
                    </div>
                </div>
            </Fragment>
        )
    }
}
