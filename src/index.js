import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store.js";
import axios from "axios";

// axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.baseURL = "https://pi-videogames-api-nu.vercel.app/";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();