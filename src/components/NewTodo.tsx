import React, { useRef } from 'react'

const NewTodo: React.FC = () => {

    // useRef is a generic, so you'll need to define what type it will be of (HTMLInput Element)
    const textInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        console.log(textInputRef.current!.value);

    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="todo-text">
                    Todo Text
                </label>
                <input type="text" id="todo-text" ref={textInputRef} />
            </div>
            <button type="submit">ADD TODO</button>
        </form>
    )
}


export default NewTodo;