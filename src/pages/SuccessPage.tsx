import React from 'react';
import { SuccessContainer, CheckIcon, ThankYouText, InfoText, PhoneNumber, SpeedUpText, TextContainer, IconImage } from './SuccessPage.styles';
import { useFormSubmission } from '../context/FormSubmissionContext';
import { Navigate } from 'react-router-dom';
import checkIcon from '../common/icons/success-icon.svg';
import LoanEnum from '../common/enums/LoanEnum';


const SuccessPage: React.FC = () => {
  const { isFormSubmitted } = useFormSubmission();

  if (!isFormSubmitted) {
    return <Navigate to="/" />;
  }
  
  return (
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
  );
};

export default SuccessPage;