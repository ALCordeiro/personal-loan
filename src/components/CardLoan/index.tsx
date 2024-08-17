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
  IconImage,
  ButtonContainer,
} from './styles';
import useIsMobile from '../../common/hooks/useIsMobile';
import convertCurrency from '../../common/utils/convertCurrency';
import useDraggableCard from '../../common/hooks/useDraggableCard';
import vertIcon from '../../common/icons/vert.svg';
import Button from '../Button';
import LoanEnum from '../../common/enums/LoanEnum';

interface HeaderProps {
  id: string;
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
  timeRemaining: string;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

const CardLoan: React.FC<HeaderProps> = ({
  id,
  title,
  money,
  automobile,
  apr,
  timeRemaining,
  index,
  moveCard
}) => {
  const isMobile = useIsMobile();
  const { ref, isDragging } = useDraggableCard({ id, index, moveCard });

  return (
    <Container ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }}>
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
        <IconImage src={vertIcon} />
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
      <ButtonContainer>
        <Button type="button" disabled={false} label={LoanEnum.START_SAVING} />
      </ButtonContainer>
    </Container>
  );
};

export default React.memo(CardLoan);
