import React from 'react';
import { Controller } from "react-hook-form";
import { Input, Select, Terms, UpsellOpportunity } from '../components';
import LoanEnum from '../common/enums/LoanEnum';
import { ButtonWrapper, FieldsContainer, FormWrapper, HomePageWrapper, TermsContainer } from './HomePage.styles';
import Button from '../components/Button';
import { loanPurposeOptions, months } from '../common/utils/dropdownOptions';
import { useLoanForm } from '../common/hooks/useLoanForm';

function HomePage() {
  const {
    register,
    handleSubmit,
    control,
    handleSelectLoanPurpose,
    handleSelectLoanMonths,
    handleKeyUp,
    offerResponse,
    isFormValid,
  } = useLoanForm();

  const onSubmit = (data: any) => console.log(data);

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
          <Input 
            title={LoanEnum.TOTAL_AMOUNT} 
            handleKeyUp={(e) => {
              handleKeyUp(e);
            }} 
            register={register("totalAmount")} 
          />
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
          <TermsContainer>
            <Terms text={LoanEnum.TERMS} />
          </TermsContainer>
          {isFormValid() && offerResponse && <UpsellOpportunity monthlyPayment={offerResponse.monthlyPayments} apr={offerResponse.apr}></UpsellOpportunity>}
        </FieldsContainer>
      </HomePageWrapper>
      <ButtonWrapper>
        <Button type="submit" disabled={!isFormValid()} label={LoanEnum.SUBMIT_APPLICATION} />
      </ButtonWrapper>
    </FormWrapper>
  );
}

export default HomePage;
