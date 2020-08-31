import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import rootReducer from './reducer/rootReducer';

const store = createStore(rootReducer);

ReactDOM.render(
        <Router>
            <App />
        </Router>,
    document.getElementById('root')
);

