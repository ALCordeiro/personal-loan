import React from 'react';
import {
  Container,
} from './styles';

interface IBadgeProps {
  title: string;
}

const Badge: React.FC<IBadgeProps> = ({
  title,
}) => {

  return (
    <Container>
      <span>{title}</span>
    </Container>
  );
};

export default React.memo(Badge);
