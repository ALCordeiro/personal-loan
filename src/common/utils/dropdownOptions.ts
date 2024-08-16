import LoanEnum from "../enums/LoanEnum";

export const loanPurposeOptions = [
  { value: LoanEnum.DEBT_CONSOLIDATION, label: LoanEnum.DEBT_CONSOLIDATION },
  { value: LoanEnum.PERSONAL, label: LoanEnum.PERSONAL },
  { value: LoanEnum.API_ERROR, label: LoanEnum.API_ERROR },
];

export const months = [
  { value: '12', label: `12 ${LoanEnum.MONTHS}` },
  { value: '24', label: `24 ${LoanEnum.MONTHS}` },
  { value: '36', label: `36 ${LoanEnum.MONTHS}` },
  { value: '48', label: `48 ${LoanEnum.MONTHS}` },
];