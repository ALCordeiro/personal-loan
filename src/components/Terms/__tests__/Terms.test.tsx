import React from 'react';
import { render, screen } from '@testing-library/react';
import Terms from '../Terms';

jest.mock('../../../common/hooks/useIsMobile', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('Terms Component', () => {
  const text = 'These are the terms and conditions.';

  it('should render the text correctly', () => {
    const useIsMobile = require('../../../common/hooks/useIsMobile').default;
    useIsMobile.mockReturnValue(false);
    
    render(<Terms text={text} />);
    
    const textElement = screen.getByText(text);
    expect(textElement).toBeInTheDocument();
  });
});
