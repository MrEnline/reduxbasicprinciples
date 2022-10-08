import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { legacy_createStore, bindActionCreators } from "@reduxjs/toolkit";
import reducer from "./reducer";
import * as actions from "./actions";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const store = configureStore({ reducer });
const store = legacy_createStore(reducer);

const { dispatch, subscribe, getState } = store;

const update = () => {
    document.getElementById("counter").textContent = getState().value;
};

subscribe(update);

// const bindActionCreator =
//     (creator, dispatch) =>
//     (...args) =>
//         dispatch(creator(...args));

// const incDispatch = bindActionCreator(inc, dispatch);
// const decDispatch = bindActionCreator(dec, dispatch);
// const rndDispatch = bindActionCreator(rnd, dispatch);

// const incDispatch = () => dispatch(inc());

// const decDispatch = () => dispatch(dec());

// const rndDispatch = (rndValue) => dispatch(rnd(rndValue));

// document.getElementById("inc").addEventListener("click", incDispatch);

// document.getElementById("dec").addEventListener("click", decDispatch);

// document.getElementById("rnd").addEventListener("click", () => {
//     rndDispatch(Math.floor(Math.random() * 10));
// });

//реализация через bindActionsCreators в redux

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
document.getElementById("inc").addEventListener("click", inc);

document.getElementById("dec").addEventListener("click", dec);

document.getElementById("rnd").addEventListener("click", () => {
    rnd(Math.floor(Math.random() * 10));
});

root.render(<React.StrictMode></React.StrictMode>);
