import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

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
        completed: false
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

  addTodo = (title) => {
    const newTodo = {
      id: 4, 
      title, 
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo ]})
  }

  render() {
    return (
      <div>
        <div className="container">
          <Header />
          <AddTodo 
            addTodo={this.addTodo}/>
          <Todos 
            todos={this.state.todos} 
            markComplete={this.markComplete}
            delTodo={this.delTodo}/>
          </div>
      </div>
    )
  }
}

export default App;
