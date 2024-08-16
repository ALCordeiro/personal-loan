import React, { useCallback } from 'react';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Input, Select, Terms } from '../components';
import LoanEnum from '../common/enums/LoanEnum';
import { ButtonWrapper, FieldsContainer, FormWrapper, HomePageWrapper } from './HomePage.styles';
import formatCurrency from '../common/utils/formatCurrency';
import { loanPurposeOptions, months } from '../common/utils/dropdownOptions';
import Button from '../components/Button';

export interface IFormInput {
  totalAmount: string;
  loanPurpose: string;
  loanMonths: string;
}

function HomePage() {
  const { register, handleSubmit, control, setValue, watch } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const handleSelectLoanPurpose = (option: { value: string; label: string }) => {
    setValue("loanPurpose", option.value);
  };

  const handleSelectLoanMonths = (option: { value: string; label: string }) => {
    setValue("loanMonths", option.value);
  };

  const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    formatCurrency(e);
  }, []);

  const totalAmount = watch("totalAmount");
  const loanPurpose = watch("loanPurpose");
  const loanMonths = watch("loanMonths");

  const isFormValid = () => {
    return totalAmount && loanPurpose && loanMonths;
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)} >
      <HomePageWrapper>
          <FieldsContainer>
            <Controller
              name="loanPurpose"
              control={control}
              render={({ field }) => (
                <Select 
                  options={loanPurposeOptions} 
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
          </FieldsContainer>
      </HomePageWrapper>
      <ButtonWrapper>
        <Button type="submit" disabled={!isFormValid()} label={LoanEnum.SUBMIT_APPLICATION} />
      </ButtonWrapper>
    </FormWrapper>

  );
}

export default HomePage;
