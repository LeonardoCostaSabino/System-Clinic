import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './Components/Navegacao/SideBar';
import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./Components/Navegacao/Home";
import Relatorios from "./Components/Navegacao/Relatorios";
import Forms from "./Components/Navegacao/Forms";
import Footer from "./Components/Navegacao/Footer";
import Header from "./Components/Navegacao/Header";

function App2() {
    return (
        <HashRouter>
            <Fragment>
                <div className="App">
                    <SideBar/>
                </div>
                <main className="page-content">

                    <div >
                        <Header/>
                        <div className="content">

                            <Route exact path="/" component={Home}/>
                            <Route path="/forms" component={Forms}/>
                            <Route path="/relatorios" component={Relatorios}/>
                            <Route path="/extras" component={Forms}/>
                        </div>
                    </div>
                </main>
                <Footer/>
            </Fragment>
        </HashRouter>
    );
}

export default App2;
