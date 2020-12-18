import create from 'zustand'

import type { ITodo } from './../interface/todo'

type TodoState = {
  todos: ITodo[]
  add: (todo: ITodo) => void
  remove: (id: number) => void
  init: (todos: ITodo[]) => void
  addList: (todo: ITodo[]) => void
}

const todoStore = create<TodoState>(set => ({
  todos: [],
  add: todo => set(state => ({ todos: [...state.todos, todo] })),
  addList: todos => set(state => ({ todos: [...state.todos, ...todos ] })),
  remove: id => set(state => ({ todos: state.todos.filter(todo => todo.id !== id )}) ),
  init: todos => set(state => ({ todos: todos })),
}))

export default todoStore;
