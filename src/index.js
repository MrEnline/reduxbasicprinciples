import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import { legacy_createStore } from '@reduxjs/toolkit';

const root = ReactDOM.createRoot(document.getElementById('root'));

const initialState = { value: 0 };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC':
            return {
                ...state,
                value: state.value + 1,
            };
        case 'DEC':
            return {
                ...state,
                value: state.value - 1,
            };
        case 'RND':
            return {
                ...state,
                value: state.value * action.payload,
            };
        default:
            return state;
    }
};

// const store = configureStore({ reducer });
const store = legacy_createStore(reducer);

const update = () => {
    document.getElementById('counter').textContent = store.getState().value;
};

store.subscribe(update);

const inc = () => ({ type: 'INC' });
const dec = () => ({ type: 'DEC' });
const rnd = (value) => ({ type: 'RND', payload: value });

document.getElementById('inc').addEventListener('click', () => {
    store.dispatch(inc());
});

document.getElementById('dec').addEventListener('click', () => {
    store.dispatch(dec());
});

document.getElementById('rnd').addEventListener('click', () => {
    const rndValue = Math.floor(Math.random() * 10);
    store.dispatch(rnd(rndValue));
});

root.render(<React.StrictMode></React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
