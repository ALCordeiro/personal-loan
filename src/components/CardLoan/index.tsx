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
import imageMock from './img/logo512.png';

interface HeaderProps {
  title: string;
  money: string;
  imageTitle: string;
  imageSubtitle: string;
}

const CardLoan: React.FC<HeaderProps> = ({
  title,
  money,
  imageTitle,
  imageSubtitle,
}) => {
  const isMobile = useIsMobile();

  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
        <Money>{money}</Money>
      </TitleContainer>
      <ImageBlockContainer>
        <ImageCard src={imageMock} />
        <ImageInformationsContainer>
          <ImageTitle>{imageTitle}</ImageTitle>
          <ImageSubtitle>{imageSubtitle}</ImageSubtitle>
        </ImageInformationsContainer> 
      </ImageBlockContainer>
      <LoanInfoContainer>   
        <FirstBlockContainer>
          <FirstBlock>APR</FirstBlock>
          <FirstBlock>Time remaining</FirstBlock>
        </FirstBlockContainer>
        <SecondBlockContainer>
          <SecondBlock>123</SecondBlock>
          <SecondBlock>85mo</SecondBlock>
        </SecondBlockContainer>
      </LoanInfoContainer>
    </Container>
  );
};

export default React.memo(CardLoan);
