import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Login from './pages/Login.js';
import './App.scss';

class App extends Component {
    constructor() {
        super();

        this.state = {};
    }
    render() {
        return (
            <div className="App">
            <Router>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
            <Route path="/login" component={login} />
            </Router>
        </div>
    );
    }
}

function login() {
    return <Login />
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

export default App;
