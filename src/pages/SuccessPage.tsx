import React from 'react';
import { SuccessContainer, CheckIcon, ThankYouText, InfoText, PhoneNumber, SpeedUpText, TextContainer, IconImage, CardsContainer } from './SuccessPage.styles';
import { useFormSubmission } from '../context/FormSubmissionContext';
import { Navigate } from 'react-router-dom';
import checkIcon from '../common/icons/success-icon.svg';
import LoanEnum from '../common/enums/LoanEnum';
import CardLoan from '../components/CardLoan';
import useIsMobile from '../common/hooks/useIsMobile';


const SuccessPage: React.FC = () => {
  const { isFormSubmitted } = useFormSubmission();
  const isMobile = useIsMobile();

  if (!isFormSubmitted) {
    return <Navigate to="/" />;
  }
  
  return (
    <>
      <SuccessContainer>
        <CheckIcon>
          <IconImage src={checkIcon} alt="Check Icon" />
        </CheckIcon>
        <TextContainer>
          <ThankYouText>{LoanEnum.THANK_YOU}</ThankYouText>
          <InfoText>
            {LoanEnum.LOAN_OFFICER} <PhoneNumber>{LoanEnum.PHONE}</PhoneNumber>.
          </InfoText>
          <SpeedUpText>{LoanEnum.SPEED_UP_TEXT}</SpeedUpText>
        </TextContainer>
      </SuccessContainer>
      <CardsContainer isMobile={isMobile}>
        <CardLoan title='Santander Consumer USA' money='$409/MONTH' imageTitle='2017 Toyota Prius II' imageSubtitle='Estimated 65,000 mil' apr={'2.49%'} timeRemaining='85'/>
        <CardLoan title='Santander Consumer USA' money='$409/MONTH' imageTitle='2017 Toyota Prius II' imageSubtitle='Estimated 65,000 mil' apr={'2.49%'} timeRemaining='85'/>
        <CardLoan title='Santander Consumer USA' money='$409/MONTH' imageTitle='2017 Toyota Prius II' imageSubtitle='Estimated 65,000 mil' apr={'2.49%'} timeRemaining='85'/>
        <CardLoan title='Santander Consumer USA' money='$409/MONTH' imageTitle='2017 Toyota Prius II' imageSubtitle='Estimated 65,000 mil' apr={'2.49%'} timeRemaining='85'/>
      </CardsContainer>

    </>
  );
};

export default SuccessPage;