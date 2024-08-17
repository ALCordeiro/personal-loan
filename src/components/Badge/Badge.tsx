import React from 'react';
import {
  Container,
} from './Badge.styles';

interface IBadgeProps {
  title: string;
}

const Badge: React.FC<IBadgeProps> = ({
  title,
}: IBadgeProps) => {

  return (
    <Container>
      <span>{title}</span>
    </Container>
  );
};

export default React.memo(Badge);
