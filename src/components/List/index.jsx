import React, { Component } from "react";
import PropTypes from 'prop-types'
import Item from "../Item/index";
import "./index.css";

export default class List extends Component {

    //对接受对props进行类型和必要性对限制
static propTypes = {
  todos: PropTypes.array.isRequired, 
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}
  render() {
    const { todos, updateTodo, deleteTodo } = this.props;
    return (
      <ul className="todo-main">
        {todos.map((todo, index) => (
          <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo = {deleteTodo} />
        ))}
      </ul>
    );
  }
}
