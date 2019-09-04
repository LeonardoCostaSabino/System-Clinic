import React, {Fragment} from 'react';
import InputMask from 'react-input-mask';
import moment from 'moment';
import 'moment/locale/pt'
import 'rc-datepicker/lib/style.css';
import { DatePickerInput } from 'rc-datepicker';
import Swal from 'sweetalert2';
import axios from 'axios';
import '../../css/card.css';
import $ from "jquery";

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
        this.validar_Form = this.validar_Form.bind(this);
        this.gerarSenha = this.gerarSenha.bind(this);
    }

    componentDidMount(){
        $('#show_password').hover(function(e) {
            e.preventDefault();
            if ( $('#password').attr('type') == 'password' ) {
                $('#password').attr('type', 'text');
                $('#show_password').attr('class', 'fa fa-eye');
            } else {
                $('#password').attr('type', 'password');
                $('#show_password').attr('class', 'fa fa-eye-slash');
            }
        })
    }

    gerarSenha(){
        let newPassword = Math.random().toString(36).slice(-8);
        document.getElementById('password').value = newPassword;
        this.setState({
            senha: newPassword
        });
        console.log(this.state.senha);

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

    validar_Form(value,field_name,primary_rule,opcional_rule){
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 5000
        });
        let Error = 1;
        switch (primary_rule){
            case 'empty': {
                if (value === "" || value == null) {
                    Toast.fire({
                        type: 'error',
                        title: "O campo "+field_name+" não pode estar vazio"
                    });
                    return Error
                }
                break;
            }
            case 'length_8': {
                if (value.length < 8) {
                    Toast.fire({
                        type: 'error',
                        title: "O campo "+field_name+" não pode permanecer com tamanho menor que 8 caracteres"
                    });
                    return Error;
                }
                break;
            }
            case 'length_12': {
                if (value.length < 12) {
                    Toast.fire({
                        type: 'error',
                        title: "O campo "+field_name+" não pode permanecer com tamanho menor que 12 caracteres"
                    });
                    return Error;
                }
                break;
            }
        }
        switch (opcional_rule) {
            case 'regex_email': {
                let regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)?$/i;
                if (!value.match(regexEmail)) {
                    Toast.fire({
                        type: 'error',
                        title: "O campo "+field_name+" não está de acordo com padrões : Exemplo: zignd.igor@gmail.com.br"
                    });
                    return Error;
                }
                break;
            }
            case 'regex_password': {
                let regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i;
                if (!value.match(regexPassword)) {
                    Toast.fire({
                        type: 'error',
                        title: "O campo "+field_name+" não está de acordo com padrões<br>Deve possuir pelo menos uma letra e um número!!"
                    });
                    return Error;
                }
                break;
            }
            case 'regex_cpf': {
                var regexCpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
                if (!value.match(regexCpf)){
                    Toast.fire({
                        type: 'error',
                        title: "O campo "+field_name+" não está de acordo com padrões!!"
                    });
                    return Error;
                }
                break;
            }
            case 'regex_telefone': {
                var regexTel = /^(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
                if (!value.match(regexTel)){
                    Toast.fire({
                        type: 'error',
                        title: "O campo "+field_name+" não está de acordo com padrões!!"
                    });
                    return Error;
                }
                break;
            }
            case 'regex_celular': {
                var regexCel = /^(?:((?:9\d|[2-9])\d{4})\-?(\d{4}))$/;
                if (!value.match(regexCel)){
                    Toast.fire({
                        type: 'error',
                        title: "O campo "+field_name+" não está de acordo com padrões!!"
                    });
                    return Error;
                }
                break;
            }
            case 'regex_cep': {
                var regexCep = /^[0-9]{5}[\d]{3}$/;
                if (!value.match(regexCep)){
                    Toast.fire({
                        type: 'error',
                        title: "O campo "+field_name+" não está de acordo com padrões!!"
                    });
                    return Error;
                }
                break;
            }
            case 'existe': {
                break;
            }
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

        this.gerarSenha();

        if(this.validar_Form(this.state.nome,"Nome",'empty') ||
            this.validar_Form(this.state.cpf,"CPF",'empty', "regex_cpf") ||
            this.validar_Form(this.state.rg,"RG",'empty') ||
            this.validar_Form(this.state.datanascimento,"Data de Nascimento",'empty') ||
            this.validar_Form(this.state.ddd,"DDD",'empty') ||
            this.validar_Form(this.state.telefone,"Telefone",'empty',"regex_telefone") ||
            this.validar_Form(this.state.celular,"Celular",'empty', "regex_celular") ||
            this.validar_Form(this.state.cep,"CEP",'empty', "regex_cep") ||
            this.validar_Form(this.state.nickname,"Nome de Usuário",'empty') ||
            this.validar_Form(this.state.email,"Email",'empty', "regex_email")){
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
                    text: 'Cadastro Realizado com sucesso'
                }).then((result) => {
                    Swal.fire({
                        title: 'Senha Temporária',
                        type: 'info',
                        text: 'Sua Senha-Temporaria é: '+this.state.senha + " Mantenha guardada essa senha até o próximo" +
                            " login pois no proximo será possivel altera-lo"
                    })
                }),
            event.target.reset()
        );
    }

    render(){
        return(
            <Fragment>
                <div className="card">
                    <div className="card-body bg-secondary">
                        <div className="row ">
                            <form id="form-cad" className="form-row" onSubmit={this.submit} method="post">
                                <div className="col-md-12 mb-3">
                                <h3 className="text-center">Dados Pessoais</h3>
                                </div>
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
                                <div className="col-sm-3 mt-3">
                                    <label>Filiação 1</label>
                                    <input  placeholder="Filiação..." name="filiacao1" className="form-control" onChange={this.handleInputChange}/>
                                </div>
                                <div className="col-sm-3 mt-3">
                                    <label>Filiação 2</label>
                                    <input  placeholder="Filiação..." name="filiacao2" className="form-control" onChange={this.handleInputChange}/>
                                </div>
                                <div className="btn-group btn-group-toggle form-check-inline  col-sm-2 ml-5" data-toggle="buttons">
                                    <label className="btn btn-dark">
                                        <input type="radio" name="options" id="option2" value="Masculino" name="genero" autoComplete="off"/> Masculino
                                    </label>
                                    <label className="btn btn-dark">
                                        <input type="radio" name="options" id="option3" value="Feminino" name="genero"  autoComplete="off"/> Feminino
                                    </label>
                                </div>
                                <div className="col-sm-1 mt-3">
                                    <label>DDD</label>
                                    <select className="form-control" name="ddd" onChange={this.handleInputChange}>
                                        <option/>
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
                                <div className="col-md-12 mb-2 mt-2">
                                    <h3 className="text-center mt-1">Endereços</h3>
                                </div>
                                <div className="col-sm-2">
                                    <label>Cep</label>
                                    <InputMask mask="99999999" maskChar="_" id="cep" placeholder="Cep.." name="cep" className="form-control" onBlur={this.pesquisa_cep} onChange={this.handleInputChange}/>
                                </div>
                                <div className="col-md-10 mt-3"/>
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
                                <div className="col-md-12 mt-4">
                                    <h3 className="text-center">Dados Específicos</h3>
                                </div>
                                <div className="col-sm-2">
                                    <label>Peso</label>
                                    <InputMask mask="999" maskChar="_" placeholder="Peso..." name="peso" className="form-control"  onChange={this.handleInputChange}/>
                                </div>
                                <div className="col-sm-2">
                                    <label>Altura</label>
                                    <InputMask mask="9,99" maskChar="_" placeholder="Altura em metros..." name="altura" className="form-control"  onChange={this.handleInputChange}/>
                                </div>
                                <div className="col-sm-1">
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
                                <div className="col-md-12 mt-2">
                                    <h3 className="text-center">Usuários</h3>
                                </div>
                                <div className="col-md-1 mt-3"/>
                                <div className="col-sm-2">
                                    <label>Nome do Usuário</label>
                                    <input placeholder="Apelido..." name="nickname" className="form-control" onChange={this.handleInputChange}/>
                                </div>
                                <div className="col-md-2 mt-3"/>
                                <div className="col-sm-2">
                                    <label>Email</label>
                                    <input placeholder="Email..." name="email" className="form-control" onChange={this.handleInputChange}/>
                                </div>
                                <div className="col-md-2 mt-3"/>
                                <div className="col-sm-2 tenta">
                                    <label>Senha</label>
                                    <input placeholder="Senha..." id="password" type="password" name="senha" className="form-control" onChange={this.handleInputChange}/>
                                    <button type="button" id="show_password" name="show_password" className="fa fa-eye-slash" aria-hidden="true"/>
                                </div>
                                <button type="submit" className="btn btn-lg btn-block btn-primary mt-3">Cadastrar</button>
                                <button type="reset" className="btn btn-lg btn-block btn-dark">Limpar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
