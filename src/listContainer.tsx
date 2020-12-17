import React from 'react'

import List from './list'
import Add from './add'

import useTodoStore from './store/todoStore'
import { ITodo } from './interface/todo'

function ListContainer() {
  const todos = useTodoStore(state => state.todos)
  const remove = useTodoStore(state => state.remove)
  const add = useTodoStore(state => state.add)

  const handleAddClick = (title: ITodo['title']) => add({ id: todos.length + 1, title })

  return (
    <>
      <List todos={todos} handleClickRemove={remove} />
      <Add handleAddClick={handleAddClick} />
    </>
  )
}

export default ListContainer;
