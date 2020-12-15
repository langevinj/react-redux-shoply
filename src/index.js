import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from "redux"
import { BrowserRouter } from 'react-router-dom'
import rootReducer from './rootReducer'
import './index.css';
import App from './App';

const store = createStore(rootReducer);
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root')
);
