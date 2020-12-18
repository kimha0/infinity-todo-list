import React from 'react'
import type { ITodo } from './interface/todo'

import Todo from './todo'

interface IList {
  todos: ITodo[]
  handleClickRemove: (id: number) => void
}

function List(props: IList) {
  const { todos, handleClickRemove } = props;

  return (
    <div>
      {todos.map(todo => <Todo key={todo.id} todo={todo} handleClickRemove={handleClickRemove}/>)}
    </div>
  )
}
export default List