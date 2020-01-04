import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
  render() {
    return (
      <div>
          <section>
              <h2>Hello from todo list</h2>
          </section>
          <TodoItem/>
      </div>
    )
  }
}

export default TodoList
