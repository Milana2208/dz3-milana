import React from 'react'
import ToDoCard from '../TodoCard/TodoCard'
const List = ({ list, handleDone, handleDelete }) => {

    return (

        <>

            {list.map((todo) => < ToDoCard

                key={todo.id}

                todo={todo}

                handleDone={handleDone}

                handleDelete={handleDelete}
            />)}

        </>

    )

}

export default List