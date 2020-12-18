import { useInfiniteQuery } from 'react-query'
import axios from 'axios'
import { ITodo } from './../interface/todo'

const fetchTodos = async ({ pageParam = 0 }) => {
  const start = pageParam * 5
  const { data } = await axios.get(
    // `https://my-json-server.typicode.com/kimha0/infinity-todo-list/todos`
    `https://jsonplaceholder.typicode.com/todos?_start=${start}&_limit=5`
  )

  return data
}

export default function useTodos() {
  return useInfiniteQuery<ITodo[], unknown, ITodo[]>('todos', fetchTodos, {
    // getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    getNextPageParam: (lastTodos, allTodos) => {
      const morePageExist = lastTodos?.length === 5
      if (!morePageExist) return false
      return allTodos.length + 1
    }
  })
}
