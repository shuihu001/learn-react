import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  handleCheckAll = (event) => {
      this.props.checkAllTodo(event.target.checked);
  }
  handleClearAllDone = () => {
    this.props.handleClearAllDone();
  }
  render() {
  const {todos} = this.props; 
  const doneCount = todos.reduce((pre, todo) => {return pre + (todo.done ? 1: 0)}, 0) 
  const total = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange = {this.handleCheckAll} checked = {doneCount !==0 && doneCount === total} />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
      </div>
    );
  }
}
