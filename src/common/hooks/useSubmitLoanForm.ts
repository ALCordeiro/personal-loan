import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitLoanApplication } from '../services/loanService';
import { IFormInput } from '../interfaces/commonInterfaces';
import { useFormSubmission } from '../../context/FormSubmissionContext';

export const useSubmitLoanForm = () => {
  const navigate = useNavigate();
  const { setFormSubmitted } = useFormSubmission();
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const onSubmit = async (data: IFormInput) => {
    setSubmissionError(null); 
    try {
      const numericAmount = parseFloat(data.totalAmount.replace(/[^0-9.-]+/g, ""));
      const response = await submitLoanApplication(numericAmount, data.loanPurpose, data.loanMonths);
      console.log(response);
      setFormSubmitted(true);
      navigate('/success', { state: { userId: response } });
    } catch (error) {
      console.error('Failed to submit loan application:', error);
      setSubmissionError('Error');
    }
  };

  return {
    onSubmit,
    submissionError,
  };
};
