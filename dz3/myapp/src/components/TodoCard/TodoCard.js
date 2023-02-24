import React from 'react'
import classes from './TodoCard.module.css'
import Button from '../Button/Button'
import ButtonDelete from "../Button/buttonDelete";
const ToDoCard = ({ todo, handleDone, handleDelete }) => {



    return (
        <div className={classes.wrapperCard}>
            <div className={todo.completed ? [ classes.todoCard, classes.done ] : classes.todoCard }>
                <h3>{todo.title}</h3>
            </div>
            <Button onClick={handleDone} id={todo.id}>Done</Button>
            <ButtonDelete onClick={handleDelete} id={todo.id}/>
        </div>
    )
}

export default ToDoCard