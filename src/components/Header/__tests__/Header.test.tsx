import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header Component', () => {
  it('should render the Header correctly', () => {
    render(<Header />);

    const logoElement = screen.getByAltText('Logo');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute('src', expect.stringContaining('lorem-logo.png'));
  });
});
