import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from '../Error';

describe('Error Component', () => {
  it('should render the error message correctly', () => {
    const errorMessage = "An error occurred";

    render(<Error errorMessage={errorMessage} />);

    const errorElement = screen.getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });
});
