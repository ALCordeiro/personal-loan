import React from 'react';
import {
  Container,
  Field,
  Result,
  UpsellBlock
} from './UpsellOpportunity.styles';
import LoanEnum from '../../common/enums/LoanEnum';

interface IUpsellOpportunity {
  monthlyPayment: string;
  apr: number;
}

const UpsellOpportunity: React.FC<IUpsellOpportunity> = ({
  monthlyPayment,
  apr,
}) => {

  return (
    <Container>
      <UpsellBlock>
        <Field>{LoanEnum.MONTHLY_PAYMENT}</Field>
        <Result>{monthlyPayment}</Result>
      </UpsellBlock>
      <UpsellBlock>
        <Field>{LoanEnum.APR}</Field>
        <Result>{apr}%</Result>
      </UpsellBlock>
    </Container>
  );
};

export default React.memo(UpsellOpportunity);
