import React from 'react';
import {
  Container,
  Field,
  Result,
  UpsellBlock
} from './styles';
import useIsMobile from '../../common/hooks/useIsMobile';
import LoanEnum from '../../common/enums/LoanEnum';

interface HeaderProps {
  monthlyPayment: number;
  apr: number;
}

const UpsellOpportunity: React.FC<HeaderProps> = ({
  monthlyPayment,
  apr,
}) => {
  const isMobile = useIsMobile();

  return (
    <Container>
      <UpsellBlock>
        <Field>{LoanEnum.MONTHLY_PAYMENT}</Field>
        <Result>${monthlyPayment}</Result>
      </UpsellBlock>
      <UpsellBlock>
        <Field>{LoanEnum.APR}</Field>
        <Result>{apr}%</Result>
      </UpsellBlock>
    </Container>
  );
};

export default React.memo(UpsellOpportunity);
