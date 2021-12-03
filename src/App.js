import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

import store from './reducers/store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Messenger from './containers/messenger'
import Login from './containers/login'
import { createBrowserHistory } from 'history'

class App extends Component {
  render(){
    let history = createBrowserHistory();
    return (
      <Provider store={store}>
        <BrowserRouter >
          <Routes>
            <Route exact path="/" element={<Messenger navigation={history}/>}/>
            <Route path="/login" element={<Login navigation={history}/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    );
}
}

export default App;
