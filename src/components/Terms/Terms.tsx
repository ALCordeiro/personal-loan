import React from 'react'
import {
  Container,
  TextFragment
} from './Terms.styles'
import useIsMobile from '../../common/hooks/useIsMobile';

interface ITermsProps {
  text: string;
}

const Terms: React.FC<ITermsProps> = ({
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
