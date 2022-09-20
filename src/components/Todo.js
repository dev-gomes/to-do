import React from 'react';

import './Todo.css';

import { FiTrash } from 'react-icons/fi';

export default function Todo({ todos, completeTodo, removeTodo }) {
    return (
        todos.map((todo, index) => (
            <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
                <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                    {todo.text}
                </div>
                <div className="icons">
                    <FiTrash 
                    onClick={() => removeTodo(todo.id)}
                    className="delete-icon"
                    />
                </div>
            </div>
        ))
    );
}