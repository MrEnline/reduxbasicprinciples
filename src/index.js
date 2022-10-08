import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { legacy_createStore, bindActionCreators } from "@reduxjs/toolkit";
import reducer from "./reducer";
import { Provider } from "react-redux";

const store = legacy_createStore(reducer);

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
);
