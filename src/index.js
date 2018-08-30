import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import "./index.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { render } from "react-dom";
import { Provider } from "react-redux";

import Routers from "./routes";
import store from "./store/configureStore";
import "./index.css";

import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Routes />
    </MuiThemeProvider>
  </Provider>,

  document.getElementById("root")
);
