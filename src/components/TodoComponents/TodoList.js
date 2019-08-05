import React from 'react';
import Todo from './Todo';

const TodoList = props => {
        return (
        <div><h3>Hello From TodoList!</h3>
            {props.todos.map(todo => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </div>
        )
    }

export default TodoList