import React from 'react';
import type { ITodo } from './interface/todo'

interface ITodoProps {
  todo: ITodo
  handleClickRemove: (id: number) => void
}

function Todo(props: ITodoProps) {
  const { todo, handleClickRemove } = props
  const onDeleteClick = React.useCallback(() => handleClickRemove(todo.id), [todo.id, handleClickRemove]);

  return (
    <div>
      <p className="id">Todo #{todo.id}</p>
      <h1>{todo.title}</h1>
      <button onClick={onDeleteClick}>Delete</button>
    </div>
  )
}


export default Todo;