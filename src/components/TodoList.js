import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

import './TodoList.css'

export default function TodoList() {
    const [todos, setTodos] = useState([]);

    function addTodo(todo) {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    }

    function removeTodo(id) {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    }

    function completeTodo(id) {
        let updateTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todos.isComplete
            }
            return todo;
        })
        setTodos(updateTodos);
    }

    return (
        <div className="todo-list">
            <TodoForm onSubmit={addTodo} />
            <Todo 
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            />
        </div>    
    );
}