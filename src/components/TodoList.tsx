import React from 'react'

const TodoList: React.FC = (props) => {
    const todos = [{
        id: 't1',
        text: 'Finish the course'
    },
    {
        id: 't2',
        text: 'Get some lunch'
    },
    {
        id: 't3',
        text: 'Call your mama'
    },
    {
        id: 't4',
        text: 'Choke a Chicken'
    }];
    return (
        <ul>
            {todos.map(todo => (
                    <>
                        <li key={todo.id}>{todo.text}</li>
                    </>
                )   
            )}
        </ul>
    )
}


export default TodoList;