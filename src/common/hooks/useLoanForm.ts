import { useState, useCallback, useEffect } from 'react';
import { useForm } from "react-hook-form";
import debounce from 'lodash/debounce';
import { fetchOffer } from '../services/offerService';
import formatCurrency from '../utils/formatCurrency';
import { IFormInput, OfferResponse } from '../interfaces/commonInterfaces';

export const useLoanForm = () => {
  const { register, handleSubmit, control, setValue, watch } = useForm<IFormInput>();
  const [offerResponse, setOfferResponse] = useState<OfferResponse | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const totalAmount = watch("totalAmount");
  const loanPurpose = watch("loanPurpose");
  const loanMonths = watch("loanMonths");

  const isFormValid = useCallback(() => {
    return (totalAmount && totalAmount !== '$') && loanPurpose && loanMonths;
  }, [totalAmount, loanPurpose, loanMonths]);

  const handleSelectLoanPurpose = (option: { value: string; label: string }) => {
    setValue("loanPurpose", option.value);
  };

  const handleSelectLoanMonths = (option: { value: string; label: string }) => {
    setValue("loanMonths", option.value);
  };

  const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    formatCurrency(e);
  }, []);

  const handleInputChange = useCallback(debounce(async (amount: string, purpose: string, months: string) => {
    if (amount && purpose && months) {
      const numericAmount = parseFloat(amount.replace(/[^0-9.-]+/g, ""));
      setErrorMessage(null)
      if (isNaN(numericAmount)) {
        console.error('Invalid amount value');
        return;
      }

      setLoading(true);
      try {
        const data = await fetchOffer(numericAmount, purpose, months);
        setOfferResponse(data);
        setErrorMessage(null);
      } catch (error) {
        console.error('Error fetching offer:', error);
        setErrorMessage('An error occurred while fetching the offer. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  }, 1500), []);

  useEffect(() => {
    setLoading(true);
    if (isFormValid()) {
      handleInputChange(totalAmount, loanPurpose, loanMonths);
    }
    return setOfferResponse(null)
  }, [totalAmount, loanPurpose, loanMonths, handleInputChange]);

  return {
    register,
    handleSubmit,
    control,
    handleSelectLoanPurpose,
    handleSelectLoanMonths,
    handleKeyUp,
    offerResponse,
    isFormValid,
    errorMessage,
    loading
  };
};
