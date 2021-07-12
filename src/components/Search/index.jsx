import React, { Component } from "react";
import PubSub from "pubsub-js";
// import axios from "axios";

export default class Search extends Component {
  search = async () => {
    const {
      keyWordElement: { value: keyWord },
    } = this;
    //发送请求前更新状态
    // this.props.updataAppState({ isFirst: false, isLoading: true });
    PubSub.publish("showPage", { isFirst: false, isLoading: true });

    // axios.get(`http://localhost:3000/api1/search/users2?q=${keyWord}`).then(
    //   (response) => {
    //     PubSub.publish("showPage", {
    //       isLoading: false,
    //       users: response.data.items,
    //     });
    //     //请求成功后更新状态
    //     // this.props.updataAppState({
    //     //   isLoading: false,
    //     //   users: response.data.items,
    //     // });
    //   },
    //   (error) => {
    //     //请求失败后更新状态
    //     PubSub.publish("showPage", {
    //       isLoading: false,
    //       err: error.message,
    //     });
    //     // this.props.updataAppState({
    //     //   isLoading: false,
    //     //   err: error.message,
    //     // });
    //   }
    // );

    //用fetch发送网络请求
    // fetch(`http://localhost:3000/api1/search/users2?q=${keyWord}`).then(
    //   res => {
    //     console.log('联系 sucess');
    //     return res.json();
    //   },
    // ).then(
    //   res => {console.log('获取数据成功', res)},
    // ).catch(
    //   error => {
    //     console.log(error)
    //   }
    // )
    try {
      const res = await fetch(`/api1/search/users2?q=${keyWord}`);
      const data = await res.json();
      PubSub.publish("showPage", {
        isLoading: false,
        users: data.items,
      });
    } catch (err) {
      PubSub.publish("showPage", {
        isLoading: false,
        err: err.message,
      });
    }
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索 Github 用户</h3>
        <div>
          <input
            ref={(c) => (this.keyWordElement = c)}
            type="text"
            placeholder="输入用户姓名"
          />
          &nbsp;<button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}
