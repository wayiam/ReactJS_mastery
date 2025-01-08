import React, { useState } from 'react'

function ToDoList() {

    const [todos, setTodos] = useState(['Learn React']);
    const [inputvalue, setInputvalues] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            inputvalue
        ])
    }

    const textOnChange = (value) => {
        console.log(value)
        setInputvalues(value)
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='tasks'>Add Task</label>
                <input type="text" id="tasks" onChange={(e) => textOnChange(e.target.value)} />
                <button type='submit'>+</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={Math.random()}>{todo}</li>
                ))}
            </ul>
        </>
    )

}

export default ToDoList