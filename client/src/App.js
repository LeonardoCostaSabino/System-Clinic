import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './Components/Navegacao/SideBar';
import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./Components/Navegacao/Home";
import Relatorios from "./Components/Navegacao/Relatorios";
import Forms from "./Components/Navegacao/Forms";
import Footer from "./Components/Navegacao/Root";

function App() {
    return (
        <HashRouter>
            <Fragment>
                <h1 className="title text-center">System Clinic Page</h1>
                <div className="App">
                    <SideBar/>
                </div>
                <main className="page-content">
                    <div className="container-fluid">
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

export default App;
