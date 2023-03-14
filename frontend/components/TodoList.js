import React from 'react';
import Todo from './Todo';

// Todolist receives your todos array and iterates over the list generating a new '<Todo/>' for each element in the array.
export default class TodoList extends React.Component {

  render() {
    return (
      <div>
        {this.props.todos.map((todo, index) => {
          return <Todo key={index} todo={todo} handleTodoClick={this.props.handleTodoClick} />
        })}                            
      </div>
    )
  }
}
