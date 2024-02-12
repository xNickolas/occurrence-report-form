import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../Input';

test('renderiza corretamente com o rótulo fornecido', () => {
  render(<Input label="Nome:" />);
  const inputElement = screen.getByLabelText('Nome do relator:');
  expect(inputElement).toBeInTheDocument();
});

test('atualiza o valor corretamente quando o usuário digita no campo', () => {
  render(<Input label="Nome do relator:" />);
  const inputElement = screen.getByLabelText('Nome do relator:');
  fireEvent.change(inputElement, { target: { value: 'John Doe' } });
  expect(inputElement.value).toBe('John Doe');
});
