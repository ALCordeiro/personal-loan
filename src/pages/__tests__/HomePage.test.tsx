import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../HomePage';
import { useSubmitLoanForm } from '../../common/hooks/useSubmitLoanForm';
import LoanEnum from '../../common/enums/LoanEnum';


jest.mock('../../common/hooks/useSubmitLoanForm');
jest.mock('react-router-dom')

const mockUseSubmitLoanForm = useSubmitLoanForm as jest.MockedFunction<typeof useSubmitLoanForm>;

describe('HomePage', () => {
  beforeEach(() => {
    // @ts-ignore
    mockUseSubmitLoanForm.mockReturnValue({
      onSubmit: jest.fn(),
    });
  });

  it('should render the HomePage correctly', () => {
    render(<HomePage />);

    expect(screen.getByText(LoanEnum.LOAN_INFORMATION)).toBeInTheDocument();
    expect(screen.getByText(LoanEnum.LOAN_PURPOSE)).toBeInTheDocument();
    expect(screen.getByText(LoanEnum.TOTAL_AMOUNT)).toBeInTheDocument();
    expect(screen.getByText(LoanEnum.TERMS)).toBeInTheDocument();
    expect(screen.getByText(LoanEnum.SUBMIT_APPLICATION)).toBeInTheDocument();
  });

});
