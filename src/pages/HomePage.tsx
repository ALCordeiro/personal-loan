import React from 'react';
import { Controller } from "react-hook-form";
import { Input, Select, Terms, UpsellOpportunity, Error, Button } from '../components';
import LoanEnum from '../common/enums/LoanEnum';
import { ButtonWrapper, FieldsContainer, FormWrapper, HomePageWrapper, TermsContainer } from './HomePage.styles';
import { loanPurposeOptions, months } from '../common/utils/dropdownOptions';
import { useLoanForm } from '../common/hooks/useLoanForm';
import { useSubmitLoanForm } from '../common/hooks/useSubmitLoanForm';
import convertCurrency from '../common/utils/convertCurrency';

const HomePage: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    handleSelectLoanPurpose,
    handleSelectLoanMonths,
    handleKeyUp,
    offerResponse,
    errorMessage,
    isFormValid,
    loading
  } = useLoanForm();

  const { onSubmit } = useSubmitLoanForm();

  const isButtonDisabled = loading || !isFormValid();

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
          {errorMessage ? (
            <Error errorMessage={errorMessage} />
          ) : (
            isFormValid() && offerResponse && (
              <UpsellOpportunity 
                monthlyPayment={convertCurrency(offerResponse.monthlyPayments)} 
                apr={offerResponse.apr} 
              />
            )
          )}
        </FieldsContainer>
      </HomePageWrapper>
      <ButtonWrapper>
        <Button type="submit" disabled={isButtonDisabled || !!errorMessage} label={LoanEnum.SUBMIT_APPLICATION} />
      </ButtonWrapper>
    </FormWrapper>
  );
}

export default HomePage;
