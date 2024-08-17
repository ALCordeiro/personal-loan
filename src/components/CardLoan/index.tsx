import React from 'react';
import {
  TitleContainer,
  Money,
  Title,
  ImageBlockContainer,
  ImageCard,
  Container,
  ImageInformationsContainer,
  ImageTitle,
  ImageSubtitle,
  LoanInfoContainer,
  FirstBlock,
  SecondBlockContainer,
  SecondBlock,
  FirstBlockContainer,

} from './styles';
import useIsMobile from '../../common/hooks/useIsMobile';
import convertCurrency from '../../common/utils/convertCurrency';

interface HeaderProps {
  title: string;
  money: number;
  automobile: {
    imageSource: string;
    mileage: number;
    year: string;
    make: string;
    accord: string;
  }
  apr: string;
  timeRemaining: string
}

const CardLoan: React.FC<HeaderProps> = ({
  title,
  money,
  automobile,
  apr,
  timeRemaining
}) => {
  const isMobile = useIsMobile();

  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
        <Money>{convertCurrency(money)}/month</Money>
      </TitleContainer>
      <ImageBlockContainer>
        <ImageCard src={automobile.imageSource} />
        <ImageInformationsContainer>
          <ImageTitle>{automobile.year} {automobile.make} {automobile.accord}</ImageTitle>
          <ImageSubtitle>Estimated {automobile.mileage} mil</ImageSubtitle>
        </ImageInformationsContainer> 
      </ImageBlockContainer>
      <LoanInfoContainer>   
        <FirstBlockContainer>
          <FirstBlock>APR</FirstBlock>
          <FirstBlock>Time remaining</FirstBlock>
        </FirstBlockContainer>
        <SecondBlockContainer>
          <SecondBlock>{apr} %</SecondBlock>
          <SecondBlock>{timeRemaining} mo</SecondBlock>
        </SecondBlockContainer>
      </LoanInfoContainer>
    </Container>
  );
};

export default React.memo(CardLoan);
