import React from 'react'

// Each todo item will be rendered as an instance of the Todo component.
// Each one is part of the TodoList component.


export default class Todo extends React.Component {
  render() {
    return (
      <div onClick={() => this.props.handleTodoClick(this.props.todo.id)} className={` todo ${this.props.todo.completed ? 'completed' : null}`} >
        {this.props.todo.name} {this.props.todo.completed ? '✔️' : null }
      </div>
    )
  }
}
