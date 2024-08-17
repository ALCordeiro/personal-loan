import React from 'react';
import { Controller } from "react-hook-form";
import { Input, Select, Terms, UpsellOpportunity, Error, Button, Header } from '../components';
import LoanEnum from '../common/enums/LoanEnum';
import { ButtonWrapper, FieldsContainer, FormWrapper, HomePageTitle, HomePageWrapper, TermsContainer } from './HomePage.styles';
import { loanPurposeOptions, months } from '../common/utils/dropdownOptions';
import { useLoanForm } from '../common/hooks/useLoanForm';
import { useSubmitLoanForm } from '../common/hooks/useSubmitLoanForm';
import convertCurrency from '../common/utils/convertCurrency';
import useIsMobile from '../common/hooks/useIsMobile';

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
  const isMobile = useIsMobile();

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)} >
      <HomePageWrapper isMobile={isMobile}>
        <FieldsContainer isMobile={isMobile}>
          <HomePageTitle>{LoanEnum.LOAN_INFORMATION}</HomePageTitle>
          <div>
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
          </div>
          {!isMobile && <TermsContainer isMobile={isMobile}>
            <Terms text={LoanEnum.TERMS} />
          </TermsContainer>}
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
        {isMobile && <TermsContainer isMobile={isMobile}>
          <Terms text={LoanEnum.TERMS} />
        </TermsContainer>}
      </HomePageWrapper>
      <ButtonWrapper isMobile={isMobile} >
        <Button type="submit" disabled={isButtonDisabled || !!errorMessage} label={LoanEnum.SUBMIT_APPLICATION} />
      </ButtonWrapper>
    </FormWrapper>
  );
}

export default HomePage;
