import React from 'react'

import List from './list'
import Add from './add'

import useTodoStore from './store/todoStore'
import useTodos from './hooks/useTodos'
import { ITodo } from './interface/todo'
import { ioCallback } from './modules/intersectionObserverCallback'

function ListContainer() {
  const targetRef = React.useRef<HTMLDivElement>(null)
  const pages = React.useRef(1)
  const io = React.useRef<IntersectionObserver>()

  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } = useTodos()
  
  const todos = useTodoStore(state => state.todos)
  const remove = useTodoStore(state => state.remove)
  const add = useTodoStore(state => state.add)
  const addList = useTodoStore(state => state.addList)
  
  const fetchTodoList = React.useCallback(
    () => fetchNextPage({ pageParam: pages.current }).then((res) => { pages.current += 1; return res }),
    [fetchNextPage, pages],
  )
    
  React.useEffect(() => {
    const list = data?.pages[pages.current - 1] ?? []
    addList(list);
  }, [addList, data])

  React.useEffect(() => {
    if (io.current) {
      io.current.disconnect()
    }
    if (hasNextPage) {
      io.current = new IntersectionObserver(ioCallback({ callback: fetchTodoList, hasNextPage, isFetchingNextPage }), { threshold: 0 });
      if (targetRef.current) {
        io.current.observe(targetRef.current)
      }
    }

    return () => {
      io.current?.disconnect()
    }
  }, [fetchTodoList, hasNextPage, isFetchingNextPage])



  const handleAddClick = (title: ITodo['title']) => add({ id: todos.length + 1, title })

  return (
    <>
      <List todos={todos} handleClickRemove={remove} />
      <div ref={targetRef}>view</div>
      <Add handleAddClick={handleAddClick} />
    </>
  )
}

export default ListContainer;
