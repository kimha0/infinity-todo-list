import { renderHook, act } from '@testing-library/react-hooks'
import todoStore from './todoStore';
import type { ITodo } from './../interface/todo'

test('todo store', () => {
  const todos: ITodo[] = [{ id: 1, title: '리엑트 공부' }, { id: 2, title: 'react query study' }, { id: 3, title: 'zustand 공부' }]


  const { result } = renderHook(() => todoStore())

  expect(result.current.todos).toHaveLength(0)
  act(() => {
    result.current.add(todos[0])
  })

  expect(result.current.todos).toHaveLength(1)

  expect(result.current.todos[0].id).toEqual(todos[0].id)
  expect(result.current.todos[0].title).toEqual(todos[0].title)

  act(() => {
    result.current.remove(todos[0].id)
  })

  expect(result.current.todos).toHaveLength(0)
});
