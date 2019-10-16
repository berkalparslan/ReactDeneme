import React from 'react';
import ReactDOM from 'react-dom';
import App from './screen/App';
import Dashboard from './screen/Dashboard';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom'

const stack = 
<Router>
    <Route exact path = "/" component= {App}></Route>
    <Route path = "/dashboard" component= {Dashboard}></Route>
</Router>

ReactDOM.render(stack, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
