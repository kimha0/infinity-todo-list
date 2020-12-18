import { renderHook, act } from '@testing-library/react-hooks'
import todoStore from './todoStore';

import todoList from './../../fixtures/todo/list.json'

test('todo store', () => {
  const { result } = renderHook(() => todoStore())


  expect(result.current.todos).toHaveLength(0)
  act(() => {
    result.current.add(todoList[0])
  })

  expect(result.current.todos).toHaveLength(1)

  expect(result.current.todos[0].id).toEqual(todoList[0].id)
  expect(result.current.todos[0].title).toEqual(todoList[0].title)

  act(() => {
    result.current.remove(todoList[0].id)
  })

  expect(result.current.todos).toHaveLength(0)
});
