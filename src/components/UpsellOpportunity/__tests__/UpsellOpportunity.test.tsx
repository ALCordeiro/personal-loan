import React from 'react';
import { render, screen } from '@testing-library/react';
import UpsellOpportunity from '../UpsellOpportunity';
import LoanEnum from '../../../common/enums/LoanEnum';

describe('UpsellOpportunity Component', () => {
  const monthlyPayment = '500';
  const apr = 3.5;

  it('should render the monthly payment correctly', () => {
    render(<UpsellOpportunity monthlyPayment={monthlyPayment} apr={apr} />);
    
    const monthlyPaymentField = screen.getByText(LoanEnum.MONTHLY_PAYMENT);
    const monthlyPaymentResult = screen.getByText(monthlyPayment);
    
    expect(monthlyPaymentField).toBeInTheDocument();
    expect(monthlyPaymentResult).toBeInTheDocument();
  });

  it('should render the APR correctly', () => {
    render(<UpsellOpportunity monthlyPayment={monthlyPayment} apr={apr} />);
    
    const aprField = screen.getByText(LoanEnum.APR);
    const aprResult = screen.getByText(`${apr}%`);
    
    expect(aprField).toBeInTheDocument();
    expect(aprResult).toBeInTheDocument();
  });
});
