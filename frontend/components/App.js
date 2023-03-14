import React, { Component } from 'react';
import TodoList from './TodoList';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      newTodo: ''
    }
  }
  handleTodoClick = (todoId) => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    })
    this.setState({ todos })
  }
  handleChange(event) {
    this.setState({ newTodo: event.target.value })
  }
  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      todos: [...this.state.todos, this.state.newTodo],
      newTodo: ''
    })
  }
  toggleComplete(index) {
    const todos = [...this.state.todos]
    todos[index] = {...todos[index], complete: !todos[index].complete}
    this.setState({ todos })
  }
  render() {
    return (
      <div>
        <h2>Todos:</h2>
        <div className='todolist'>
          <TodoList id='todos' todos={this.state.todos} handleTodoClick={this.handleTodoClick}/>
        </div>
      </div>
    )
  }
}
