import React from 'react'
import {
  Container,
  TextFragment
} from './styles'

interface HeaderProps {
  text: string;
}

const Terms: React.FC<HeaderProps> = ({
  text,
}) => {

  return (
    <Container>
      <TextFragment>{text}</TextFragment>
    </Container>
  )
}

export default React.memo(Terms)
