import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Add from './add';


test('renders todo', () => {
  const handleAddClick = jest.fn()

  const { getByText, getByLabelText } = render(<Add handleAddClick={handleAddClick} />);
  
  const button = getByText('Add')
  const input = getByLabelText('todo-input')

  fireEvent.change(input, { target: { value: 'do test' }})
  fireEvent.click(button);

  expect(handleAddClick).toBeCalledWith({ id: 1, title: 'do test' })

  fireEvent.change(input, { target: { value: '' }})
  fireEvent.click(button);

  expect(handleAddClick).toBeCalledTimes(1)
});
