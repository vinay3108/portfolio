import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import App from "./App";
import GlobalStyle from './Styles/GlobalStyle'
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
