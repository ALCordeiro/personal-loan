import React from 'react';
import { render, screen } from '@testing-library/react';
import Badge from '../Badge';

describe('Badge Component', () => {
  test('renders correctly with given title', () => {
    const title = 'Test Badge';
    render(<Badge title={title} />);

    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
