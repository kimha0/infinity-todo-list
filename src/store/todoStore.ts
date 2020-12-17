import create from 'zustand'

import type { ITodo } from './../interface/todo'

type TodoState = {
  todos: ITodo[]
  add: (todo: ITodo) => void
  remove: (id: number) => void
}

const todoStore = create<TodoState>(set => ({
  todos: [],
  add: todo => set(state => ({ todos: [...state.todos, todo] })),
  remove: id => set(state => ({ todos: state.todos.filter(todo => todo.id !== id )}) ),
}))

export default todoStore;
