import React from 'react';
import {Route, NavLink, HashRouter} from "react-router-dom";

class SideBar extends React.Component{
    render() {
        return(
            <div className="float-left">
                <div className="row">
                    <div className="col-12">
                        <nav className="nav flex-column">
                            <NavLink className="nav-link active" to="/">
                                <i className="fas fa-home"/> Home
                            </NavLink>
                            <NavLink className="nav-link" to="/forms">
                                <i className="fab fa-wpforms"/> Forms
                            </NavLink>
                            <NavLink className="nav-link" to="/relatorios">
                                <i className="far fa-file-word"/> Relatorios
                            </NavLink>
                            <NavLink className="nav-link" to="/extras">
                                <i className="fas fa-asterisk"/> Extras
                            </NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}
export default SideBar;