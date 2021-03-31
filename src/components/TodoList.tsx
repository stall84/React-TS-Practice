import React from 'react'

// Describe the shape of your props via an interface that the component will generically 'inherit' from
interface TodoListProps {
    // Expecting to get an array of objects with string key's id and text
    items: {id: string, text: string }[]
}
const TodoList: React.FC<TodoListProps> = (props) => {
    

    return (
        <ul>
            {props.items.map(todo => (
                    <>
                        <li key={todo.id}>{todo.text}</li>
                    </>
                )   
            )}
        </ul>
    )
}


export default TodoList;