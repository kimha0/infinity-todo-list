import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Todo from './todo';
import type { ITodo } from './interface/todo'


test('renders todo', () => {
  const todo: ITodo = { id: 1, title: '리엑트 공부' }
  const handleClickRemove = jest.fn()

  const { container, getByText } = render(<Todo todo={todo} handleClickRemove={handleClickRemove} />);

  expect(container).toHaveTextContent('리엑트 공부')

  const button = getByText('Delete')

  fireEvent.click(button)

  expect(handleClickRemove).toBeCalledWith(1)
});
