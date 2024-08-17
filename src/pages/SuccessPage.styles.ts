import styled from 'styled-components';
import fontSize from '../common/utils/fontSize';

export const SuccessContainer = styled.div`
  background-color: #7146B5;
  color: white;

  padding: 50px 15%;
  height: 288px;
`;

export const CheckIcon = styled.div`
  width: 85px;
  height: 85px;
`;

export const IconImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ThankYouText = styled.h1`
  ${fontSize(32)}
  font-weight: 500;
  padding: 16px 0px 32px 0px;
  margin: 0;
`;

export const InfoText = styled.p`
  ${fontSize(16)}
  font-weight: 500;
`;

export const PhoneNumber = styled.span`
  ${fontSize(16)}
  font-weight: bold;
`;

export const SpeedUpText = styled.p`
  ${fontSize(16)}
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
`