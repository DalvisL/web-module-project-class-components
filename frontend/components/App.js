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
      newTodo: '',
      hideCompleted: false
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
  
  toggleHideBtn = () => {
    this.setState({ hideCompleted: !this.state.hideCompleted })
  }
  handleChange(event) {
    this.setState({ newTodo: event.target.value })
    console.log(this.state.newTodo);
  }
  handleSubmit(event) {
    event.preventDefault()
    const todos = [...this.state.todos, { name: this.state.newTodo, id: Date.now(), completed: false }];
    this.setState({ todos, newTodo: '' });
  }
  toggleComplete(index) {
    const todos = [...this.state.todos]
    todos[index] = {...todos[index], complete: !todos[index].complete}
    this.setState({ todos })
  }
  listToRender() {
    if (this.state.hideCompleted) {
      return this.state.todos.filter(todo => !todo.completed)
    }
    return this.state.todos
  }
  render() {
    return (
      <div>
        <h2>Todos:</h2>
        <div className='todolist'>
          <TodoList id='todos' todos={this.listToRender()} handleTodoClick={this.handleTodoClick} hideCompleted={this.state.hideCompleted}/>
        </div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type='text' value={this.state.newTodo} onChange={(event) => this.handleChange(event) }/>
          <button type='submit'>Submit</button>
        </form>
        {/* show a button that says hide completed if there is a completed task and then shows a button that says show completed, if the show completed is clicked the completed tasks show up again */}
        <button onClick={() => this.toggleHideBtn()} className='hide-btn' >{ this.state.hideCompleted ? 'Show Completed': 'Hide Completed'}</button>
      </div>
    )
  }
}
