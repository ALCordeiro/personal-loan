import React from 'react'
import {
  Container,
  TextFragment
} from './styles'
import useIsMobile from '../../common/hooks/useIsMobile';

interface HeaderProps {
  text: string;
}

const Terms: React.FC<HeaderProps> = ({
  text,
}) => {

  const isMobile = useIsMobile();

  return (
    <Container isMobile={isMobile}>
      <TextFragment>{text}</TextFragment>
    </Container>
  )
}

export default React.memo(Terms)
