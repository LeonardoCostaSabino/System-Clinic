import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import {isAuthenticated} from "./Services/auth";
import CadastroUser from "./Components/Forms/CadastroUser";
import Login from './Components/Forms/Login';
import App2 from './App2';

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated () ? (
                <Component {...props} />
            ) : (
                <Redirect to ={{pathname: "/", state: {from: props.location}}} />
            )
        }
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/signup" component={CadastroUser}/>
            <PrivateRoute path="/app" component={App2}/>
            <Route path="*" component={() => <h1>Page not Found</h1>}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;