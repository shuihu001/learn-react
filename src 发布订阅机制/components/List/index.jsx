import React, { Component } from "react";
import PubSub from 'pubsub-js';
import "./index.css";

export default class List extends Component {
  state = {
    users: [],
    isFirst: true,
    isLogin: false,
    err: ''
  }
  componentDidMount() {
    //订阅消息 
    this.token = PubSub.subscribe('showPage', (msg, stateObj) => {
      this.setState(stateObj)
    })
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }
  render() {
    const { users, isFirst, isLoading, err } = this.state;
    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用输入关键字，随后点击搜索</h2> :
          isLoading ? <h2>Loding....</h2> :
          err ?  <h2 style={{color: 'red'}}>{err}</h2> :
          users.map((userObj) => {
          return (
            <div key={userObj.id} className="card">
              <a
                href={userObj.html_url}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt=""
                  src={userObj.avatar_url}
                  style={{ width: "100px" }}
                />
              </a>
              <p className="card-text">{userObj.login}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
