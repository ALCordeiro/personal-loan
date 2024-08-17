import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../Input';
import { UseFormRegisterReturn } from 'react-hook-form';

describe('Input Component', () => {
  it('should render the title correctly', () => {
    const title = "Username";
    const handleKeyUp = jest.fn();
    const register = {} as UseFormRegisterReturn;

    render(<Input title={title} handleKeyUp={handleKeyUp} register={register} />);

    const labelElement = screen.getByText(title);
    expect(labelElement).toBeInTheDocument();
  });

  it('should call handleKeyUp when a key is pressed', () => {
    const title = "Username";
    const handleKeyUp = jest.fn();
    const register = {} as UseFormRegisterReturn;

    render(<Input title={title} handleKeyUp={handleKeyUp} register={register} />);

    const inputElement = screen.getByRole('textbox');
    fireEvent.keyUp(inputElement, { key: 'A', code: 'KeyA' });

    expect(handleKeyUp).toHaveBeenCalled();
  });
});
