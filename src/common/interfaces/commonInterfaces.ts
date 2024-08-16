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