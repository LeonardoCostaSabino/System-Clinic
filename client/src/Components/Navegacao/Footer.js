import React, { Component } from "react";
import {Link} from 'react-router-dom'
import '../../css/footer.css'

class Footer extends Component{
    render() {
        return(
            <section id="footer">
                <div className="container">
                    <div className="row text-center text-xs-center text-sm-left text-md-left">
                        <div className="col-md-3 ml-5"></div>
                        <div className="col-xs-12">
                            <h2 className="text-center">System Clinic</h2>
                            <ul className="list-unstyled quick-links">
                                <li><Link to='/'><i className="fas fa-barcode" />Home</Link></li>
                                <li><Link><i className="fas fa-barcode" />Sobre Nós</Link></li>
                                <li><Link><i className="fas fa-barcode" />Agendamento</Link></li>
                                <li><Link><i className="fas fa-barcode" />Contato</Link></li>
                                <li><Link><i className="fas fa-barcode" />Onde atendemos</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-5 ml-4"></div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <ul className="list-unstyled list-inline social text-center">
                                    <li className="list-inline-item"><a><i className="fab fa-facebook-f" /></a></li>
                                    <li className="list-inline-item"><a><i className="fab fa-twitter" /></a></li>
                                    <li className="list-inline-item"><a><i className="fab fa-instagram" /></a></li>
                                    <li className="list-inline-item"><a><i className="fab fa-google" /></a></li>
                                    <li className="list-inline-item"><a target="_blank"><i className="fa fa-envelope" /></a></li>
                                </ul>
                            </div>
                        </div>
                            <div className="col-12 ml-4 mt-2 mt-sm-2 text-center text-white">
                                <p><u><a href="https://www.nationaltransaction.com/">National Transaction Corporation</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>
                                <p className="h6">© Todos os Direitos Reservados.<Link to='/' className="text-green ml-2">SEP</Link></p>
                            </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Footer