export interface IFormInput {
  totalAmount: string;
  loanPurpose: string;
  loanMonths: string;
}

export interface OfferResponse {
  id: string;
  monthlyPayments: number;
  apr: number;
}

export interface Loan {
  id: string;
  lender: string;
  monthlyPayments: number;
  automobile: {
    imageSource: string;
    mileage: number;
    year: string;
    make: string;
    accord: string;
  };
  apr: string;
  remainingMonths: string;
}
