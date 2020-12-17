import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import List from './list';
import todoList from './../fixtures/todo/list.json'

test('renders todo', () => {
  const handleClickRemove = jest.fn()

  const { getByText, getAllByText } = render(<List todos={todoList} handleClickRemove={handleClickRemove} />);
  
  expect(getByText(/Todo #1/)).not.toBeNull()
  expect(getByText(/Todo #2/)).not.toBeNull()
  
  const buttons = getAllByText('Delete')
  
  fireEvent.click(buttons[0]);
  expect(handleClickRemove).toBeCalledWith(1)
});
