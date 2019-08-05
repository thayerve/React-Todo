import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  constructor(){
  super();
  this.state = {
    todos: [
      {task: 'Build App',
      id: 1528817084358,
      completed: false
    }
    ]
  };
  }
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
