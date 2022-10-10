import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { legacy_createStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import { Provider } from 'react-redux';
import App from './components/App';

const store = legacy_createStore(reducer);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);
