import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { renderHook, act } from '@testing-library/react-hooks'

import useTodos from './useTodos'
import { wrapper } from './../modules/test-utils'

import todoList from './../../fixtures/todo/list.json'

const mock = new MockAdapter(axios)

test('useTodos test', async () => {
  mock.onGet(`https://my-json-server.typicode.com/kimha0/infinity-todo-list/todos`).reply(200, todoList)

  await act(async () => {
  const { result, waitForNextUpdate } = renderHook(() => useTodos(), { wrapper })

    await waitForNextUpdate()
    expect(result.current.isLoading).toBe(true)

    // await waitForNextUpdate()
    // expect(result.current.).toHaveLength(4)
  })
  
});
