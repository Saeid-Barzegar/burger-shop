import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './assets/style/main.scss'

import { BrowserRouter } from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducers/index";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const Store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))

ReactDOM.render(
    <BrowserRouter>
        <Provider store={Store}>
            <App />
        </Provider>
    </BrowserRouter>, document.getElementById('root'));


serviceWorker.register();
