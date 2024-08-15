import React, { useCallback } from 'react';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Input, Select, Terms } from '../components';
import LoanEnum from '../common/enums/LoanEnum';
import { HomePageWrapper } from './HomePage.styles';
import formatCurrency from '../common/utils/formatCurrency';

export interface IFormInput {
  totalAmount: string;
  loanPurpose: string;
  loanMonths: string;
}

function HomePage() {
  const { register, handleSubmit, control, setValue } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const options = [
    { value: 'DEBT_CONSOLIDATION', label: LoanEnum.DEBT_CONSOLIDATION },
    { value: 'PERSONAL', label: LoanEnum.PERSONAL },
    { value: 'API_ERROR', label: LoanEnum.API_ERROR },
  ];

  const months = [
    { value: '12', label: `12 ${LoanEnum.MONTHS}` },
    { value: '24', label: `24 ${LoanEnum.MONTHS}` },
    { value: '36', label: `36 ${LoanEnum.MONTHS}` },
    { value: '48', label: `48 ${LoanEnum.MONTHS}` },
  ];

  const handleSelectLoanPurpose = (option: { value: string; label: string }) => {
    setValue("loanPurpose", option.value);
  };

  const handleSelectLoanMonths = (option: { value: string; label: string }) => {
    setValue("loanMonths", option.value);
  };

  const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    formatCurrency(e);
  }, []);

  return (
    <HomePageWrapper>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '458px' }}>
        <Controller
          name="loanPurpose"
          control={control}
          render={({ field }) => (
            <Select 
              options={options} 
              onSelect={handleSelectLoanPurpose} 
              placeholder={LoanEnum.SELECT_OPTION} 
              label={LoanEnum.LOAN_PURPOSE} 
              {...field}
            />
          )}
        />
        <Input title={LoanEnum.TOTAL_AMOUNT} handleKeyUp={handleKeyUp} register={register("totalAmount")} />
        <Controller
          name="loanMonths"
          control={control}
          render={({ field }) => (
            <Select 
              options={months} 
              onSelect={handleSelectLoanMonths} 
              placeholder={LoanEnum.SELECT_OPTION} 
              label={LoanEnum.LOAN_TERM} 
              {...field}
            />
          )}
        />
        <Terms text={LoanEnum.TERMS} />
        <button type="submit">
          Submit
        </button>
      </form>
    </HomePageWrapper>
  );
}

export default HomePage;
