import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import {App} from './App';
import {LandingPage} from './components/LandingPage';
import {HomePage} from './components/HomePage';

ReactDOM.render(
    <Router>
        <App>
            <Switch>
                <Route exact path = '/' component={LandingPage} />
                <Route exact path = '/Home' component={HomePage} />
            </Switch>
        </App>
    </Router>, 
document.getElementById('root'));

