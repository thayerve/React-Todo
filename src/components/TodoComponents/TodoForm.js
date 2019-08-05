import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
        
        }
    }
    render () {
        return (
            <form onSubmit={this.addItem}>
                <input 
                type='text' 
                name='task'
                value={this.task}
                onChange={this.handleChange}
                />
                <input type="submit" value="Add Todo" />
                <button>Clear Completed</button>
            </form>
        )
    }
}
export default TodoForm