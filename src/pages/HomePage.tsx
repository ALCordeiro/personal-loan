import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import { Input, Select, Terms } from '../components';
import LoanEnum from '../common/enums/LoanEnum';
import { HomePageWrapper } from './HomePage.styles';


export interface IFormInput {
  totalAmount: string;
  loanPurpose: string;
}

function HomePage() {
  const { register, handleSubmit } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  const options = [
    { value: '1', label: LoanEnum.DEBT_CONSOLIDATION },
    { value: '2', label: LoanEnum.PERSONAL },
    { value: '3', label: LoanEnum.API_ERROR },
  ];

  const months = [
    { value: '12', label: `12 ${LoanEnum.MONTHS}` },
    { value: '24', label: `24 ${LoanEnum.MONTHS}` },
    { value: '36', label: `36 ${LoanEnum.MONTHS}` },
    { value: '48', label: `48 ${LoanEnum.MONTHS}` },
  ];

  const handleSelect = (option: { value: string; label: string }) => {
    console.log('Selected option:', option);
  };
  

  return (
    <HomePageWrapper>
      <form onSubmit={handleSubmit((data) => console.log(data))} style={{ width: '458px'}}>
        <Select options={options} onSelect={handleSelect} placeholder={LoanEnum.SELECT_OPTION} label={LoanEnum.LOAN_PURPOSE} />
        <Input title={LoanEnum.TOTAL_AMOUNT} register={register} />
        <Select options={months} onSelect={handleSelect} placeholder={LoanEnum.SELECT_OPTION} label={LoanEnum.LOAN_TERM} />
        <Terms text={LoanEnum.TERMS} />
        <button type="submit">
          Submit
        </button>
      </form>
    </HomePageWrapper>
  );
}

export default HomePage;
