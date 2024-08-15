import LoanEnum from "../enums/LoanEnum";

export const loanPurposeOptions = [
  { value: '1', label: LoanEnum.DEBT_CONSOLIDATION },
  { value: '2', label: LoanEnum.PERSONAL },
  { value: '3', label: LoanEnum.API_ERROR },
];

export const months = [
  { value: '12', label: `12 ${LoanEnum.MONTHS}` },
  { value: '24', label: `24 ${LoanEnum.MONTHS}` },
  { value: '36', label: `36 ${LoanEnum.MONTHS}` },
  { value: '48', label: `48 ${LoanEnum.MONTHS}` },
];