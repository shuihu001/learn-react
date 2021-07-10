import React, { Component } from "react";
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

  state = {
    users: [],
    isFirst: true,
    isLogin: false,
    err: ''
  }
  updataAppState = (stateObj) => {
    this.setState(stateObj)
  }
  render() {
    return (
      <div className="container">
      <Search updataAppState = {this.updataAppState} />
      <List {...this.state} />
      </div>
    );
  }
}
