import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import {App} from './App';
import {LandingPage} from './components/LandingPage';

ReactDOM.render(
    <Router>
        <App>
            <Switch>
                <Route exact path = '/' component={LandingPage} />
            </Switch>
        </App>
    </Router>, 
document.getElementById('root'));

