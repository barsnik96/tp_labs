import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './css/index.css';
import Router from './router/Router';
import * as serviceWorker from '../src/serviceWorker';
import RootReducer from './redux/reducers/RootReducer'

const store = createStore(RootReducer)
render((
    <Provider store = {store}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
