import React from 'react'
import type { ITodo } from './interface/todo'

interface IAddProps {
  handleAddClick: (title: ITodo['title']) => void
}

function Add(props: IAddProps) {
  const ref = React.useRef<HTMLInputElement>(null)
  
  const onClickAddTodo = () => {
    if (!ref.current?.value) return
    
    props.handleAddClick(ref.current?.value)
  }

  return (
    <div>
      <input type="text" ref={ref} aria-label='todo-input'></input>
      <button onClick={onClickAddTodo}>Add</button>
    </div>
  )
}

export default Add
