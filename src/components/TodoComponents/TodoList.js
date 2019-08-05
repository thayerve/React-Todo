import React from 'react';
import Todo from './Todo';

const TodoList = props => {
        return (
        <div><h3>List of things to do:</h3>
            {props.todos.map(todo => (
                <Todo key={todo.id} todo={todo} toggleItem={props.toggleItem} />
            ))}
        </div>
        )
    }

export default TodoList