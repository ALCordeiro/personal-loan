import React from 'react';
import { render, screen } from '@testing-library/react';
import { useLocation } from 'react-router-dom';
import useIsMobile from '../../common/hooks/useIsMobile';
import { useUserData } from '../../common/hooks/useUserData';
import { useFormSubmission } from '../../context/FormSubmissionContext';
import SuccessPage from '../SuccessPage';
import { useDrag, useDrop } from 'react-dnd';

jest.mock('../../context/FormSubmissionContext');
jest.mock('../../common/hooks/useIsMobile');
jest.mock('../../common/hooks/useUserData');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}));
jest.mock('react-dnd', () => ({
  useRef: jest.fn(),
  useDrop: jest.fn(),
  useDrag: jest.fn()
}));

const mockUseFormSubmission = useFormSubmission as jest.MockedFunction<typeof useFormSubmission>;
const mockUseIsMobile = useIsMobile as jest.MockedFunction<typeof useIsMobile>;
const mockUseUserData = useUserData as jest.MockedFunction<typeof useUserData>;
const mockUseLocation = useLocation as jest.MockedFunction<typeof useLocation>;
const mockUseDrop = useDrop as jest.MockedFunction<typeof useDrop>;
const mockUseDrag = useDrag as jest.MockedFunction<typeof useDrag>;


describe('SuccessPage', () => {
  beforeEach(() => {
    mockUseFormSubmission.mockReturnValue({ isFormSubmitted: true, setFormSubmitted: jest.fn() });
    mockUseIsMobile.mockReturnValue(false);
    mockUseLocation.mockReturnValue({
      pathname: '/success',
      state: { userId: '123' },
    } as any);
    mockUseUserData.mockReturnValue({
      userData: {
        loansAvailable: [
          {
            id: '1',
            lender: 'Lender A',
            monthlyPayments: 100,
            automobile: 'Car A',
            apr: 5,
            remainingMonths: 12,
          },
          {
            id: '2',
            lender: 'Lender B',
            monthlyPayments: 200,
            automobile: 'Car B',
            apr: 10,
            remainingMonths: 24,
          },
        ],
      },
    } as any);
    mockUseDrop.mockImplementation(() => [{}, jest.fn()]);
    // @ts-ignore
    mockUseDrag.mockImplementation(() => [{}, jest.fn()]);
  });

  it('should render the SuccessPage correctly', async () => {
    render(
      <SuccessPage />
    );
    
    expect(screen.getByAltText('Check Icon')).toBeInTheDocument();
  });
});
