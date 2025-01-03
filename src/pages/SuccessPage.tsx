import React, { useState, useCallback, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { SuccessContainer, CheckIcon, ThankYouText, InfoText, PhoneNumber, SpeedUpText, TextContainer, IconImage, CardsContainer, ContainerBadge, BadgeAuxText } from './SuccessPage.styles';
import { useFormSubmission } from '../context/FormSubmissionContext';
import checkIcon from '../common/icons/success-icon.svg';
import LoanEnum from '../common/enums/LoanEnum';
import useIsMobile from '../common/hooks/useIsMobile';
import { useUserData } from '../common/hooks/useUserData';
import update from 'immutability-helper';
import { Loan } from '../common/interfaces/commonInterfaces';
import { Badge, CardLoan } from '../components';

const SuccessPage: React.FC = () => {
  const { isFormSubmitted } = useFormSubmission();
  const isMobile = useIsMobile();
  const location = useLocation();
  const { userId } = location.state?.userId;
  const { userData } = useUserData(userId!);

  const [loans, setLoans] = useState<Loan[]>([]);

  useEffect(() => {
    if (userData && userData.loansAvailable) {
      setLoans(userData.loansAvailable);
    }
  }, [userData]);

  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    setLoans((prevLoans: Loan[]) =>
      update(prevLoans, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevLoans[dragIndex]],
        ],
      })
    );
  }, []);

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
      <ContainerBadge>
        <Badge title={LoanEnum.SAVING_AVAILABLE} />
        <BadgeAuxText><strong>{LoanEnum.YOU_COULD_SAVING}</strong>{LoanEnum.EXISTINGS_LOANS}</BadgeAuxText>
      </ContainerBadge>
      <CardsContainer isMobile={isMobile}>
        {loans.map((loan: Loan, index: number) => (
          <CardLoan
            key={loan.id}
            id={loan.id}
            index={index}
            title={loan.lender}
            money={loan.monthlyPayments}
            automobile={loan.automobile}
            apr={loan.apr}
            timeRemaining={loan.remainingMonths}
            moveCard={moveCard}
          />
        ))}
      </CardsContainer>
    </>
  );
};

export default SuccessPage;
