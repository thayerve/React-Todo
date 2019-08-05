import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css'

class App extends React.Component {
  constructor(){
  super();
  this.state = {
    todos: [
      {task: 'Build App',
      id: 1528817084358,
      completed: false},
      {task: 'Test functionality',
      id: 1528817077286,
      completed: false}
    ]
  };
  }

  addItem = event => {
    event.preventDefault();
    console.log('item added:', event.target.value);
    const newTodo = {
      id: Date.now(),
      task: event.target.value,
      completed: false
    }
    
    this.setState(
        {...this.props.state.todos, newTodo
      });
    event.target.value = ''
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  clearCompleted = () => {
    console.log('This is when the completed tasks will be cleared');
  }

  toggleItem = id => {
    console.log(id);
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  render() {
    return (
      <div>
        <TodoList 
          todos={this.state.todos} 
          toggleItem = {this.toggleItem} />
        <TodoForm 
          addItem = {this.addItem} 
          clearCompleted = {this.clearCompleted}
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
           />
      </div>
    );
  }
}

export default App;
