import React, { useState } from 'react';

import './TodoForm.css'

export default function TodoForm(props) {

    const [input, setInput] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('')
    }

    return (
        <>
        <form className="todo-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Whats is to-do?" 
                value={input} name="text" 
                className="todo-input" 
                onChange={event => setInput(event.target.value)}
            />
            <button className="todo-button">Add todo</button>
        </form>
        <small>Quais seus planos para hoje?</small> 
        </>
    );
}