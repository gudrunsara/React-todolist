import React, { Component } from 'react';
import Todos from './components/Todos';

// Global css: 
import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id: 1, 
        title: 'Take out the trash', 
        completed: false
      },
      {
        id: 2, 
        title: 'Make dinner', 
        completed: false
      },
      {
        id: 3, 
        title: 'Meeting with boss', 
        completed: true
      }
    ]
  }

  // Toggle complete
  markComplete = (id) => {
    this.setState ({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  // Delete Todod
  delTodo = (id) => {
    // (... is a spread attribute)
    // Filter the todos and copy all except the one with the id:
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  render() {
    return (
      <div>
        <Todos 
          todos={this.state.todos} 
          markComplete={this.markComplete}
          delTodo={this.delTodo}/>
      </div>
    )
  }
}

export default App;
