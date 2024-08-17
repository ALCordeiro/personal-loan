import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { SuccessContainer, CheckIcon, ThankYouText, InfoText, PhoneNumber, SpeedUpText, TextContainer, IconImage, CardsContainer } from './SuccessPage.styles';
import { useFormSubmission } from '../context/FormSubmissionContext';
import checkIcon from '../common/icons/success-icon.svg';
import LoanEnum from '../common/enums/LoanEnum';
import CardLoan from '../components/CardLoan';
import useIsMobile from '../common/hooks/useIsMobile';
import { useUserData } from '../common/hooks/useUserData';

const SuccessPage: React.FC = () => {
  const { isFormSubmitted } = useFormSubmission();
  const isMobile = useIsMobile();
  const location = useLocation();
  const userId = location.state?.userId;
  
  const { userData } = useUserData(userId!);

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
        {userData && userData.loansAvailable.map((loan: any, index: number) => (
          <CardLoan
            key={index}
            title={loan.lender}
            money={loan.monthlyPayments}
            automobile={loan.automobile}
            apr={loan.apr}
            timeRemaining={loan.remainingMonths}
          />
        ))}
      </CardsContainer>
    </>
  );
};

export default SuccessPage;
