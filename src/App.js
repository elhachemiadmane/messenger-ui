import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";

import store from "./reducers/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Messenger from "./containers/messenger";
import Login from "./containers/login";
import { createBrowserHistory } from "history";
//import { Switch } from "antd";

class App extends Component {
  render() {
    let history = createBrowserHistory();
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Messenger} />
            <Route path="/login" component={Login} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
