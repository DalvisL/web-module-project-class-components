import React, { Component } from 'react';
import TodoList from './TodoList';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      newTodo: ''
    }
  }
  render() {
    return (
      <div>
        <h2>Todos:</h2>
        <div className='todolist'>
          <TodoList todos={this.state.todos} />
        </div>
      </div>
    )
  }
}
