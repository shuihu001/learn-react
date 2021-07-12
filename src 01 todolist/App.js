import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";
import { Component } from "react";

export default class App extends Component {
  state = { 
    todos: [
      { id: "001", name: "吃饭", done: false },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "打豆豆", done: false },
    ] 
  };
  addTodo = (todoObj) => {
    const {todos} = this.state;
    const newTodos = [todoObj,...todos];
    this.setState({todos:newTodos});
  }
  updateTodo = (id, done) => {
    const {todos} = this.state; 
    const newTodos = todos.map(todoObj => {
      if(todoObj.id ===id) return {...todoObj, done}
      else return todoObj;
    }); 
    this.setState({todos:newTodos});
  }
  deleteTodo = (id) => {
    const {todos} = this.state;
    const newTodos = todos.filter(todo => todo.id !== id);
    this.setState({todos:newTodos});
  }
  checkAllTodo = (done) => {
    const {todos} = this.state;
    const newTodos = todos.map(todo => {return {...todo, done}});
    this.setState({todos:newTodos});


  }
  handleClearAllDone = () => {
    const {todos} = this.state;
    const newTodos = todos.filter(todo => todo.done === false);
    this.setState({todos:newTodos});
  }
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}></Header>
          <List todos={this.state.todos} updateTodo = {this.updateTodo} deleteTodo = {this.deleteTodo} ></List>
          <Footer todos ={this.state.todos} handleClearAllDone={this.handleClearAllDone} checkAllTodo={this.checkAllTodo}></Footer>
        </div>
      </div>
    );
  }
}
