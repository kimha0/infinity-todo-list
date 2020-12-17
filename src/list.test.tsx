import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import List from './list';
import type { ITodo } from './interface/todo'


test('renders todo', () => {
  const todos: ITodo[] = [{ id: 1, title: '리엑트 공부하기' }, { id: 2, title: 'React query 공부하기' }]
  const handleClickRemove = jest.fn()

  const { getByText, getAllByText } = render(<List todos={todos} handleClickRemove={handleClickRemove} />);
  
  expect(getByText(/Todo #1/)).not.toBeNull()
  expect(getByText(/Todo #2/)).not.toBeNull()
  
  const buttons = getAllByText('Delete')
  
  fireEvent.click(buttons[0]);
  expect(handleClickRemove).toBeCalledWith(1)
});
