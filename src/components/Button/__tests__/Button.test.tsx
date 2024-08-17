import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../Button';
import useIsMobile from '../../../common/hooks/useIsMobile';

jest.mock('../../../common/hooks/useIsMobile');

describe('Button Component', () => {
  it('should render the button with the correct label', () => {
    (useIsMobile as jest.Mock).mockReturnValue(false);

    render(<Button type="button" disabled={false} label="Click Me" />);

    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('should be disabled when the disabled prop is true', () => {
    (useIsMobile as jest.Mock).mockReturnValue(false);

    render(<Button type="button" disabled={true} label="Click Me" />);

    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeDisabled();
  });
});
