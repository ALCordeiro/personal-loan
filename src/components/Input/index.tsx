import React, { useCallback } from 'react'
import {
  Container,
  InputWrapper, 
  Label
} from './styles'
import useIsMobile from '../../common/hooks/useIsMobile'
import { UseFormRegister } from 'react-hook-form';
import { IFormInput } from '../../App';
import formatCurrency from '../../common/utils/formatCurrency';

interface HeaderProps {
  title: string;
  register: UseFormRegister<IFormInput>;
}

const Input: React.FC<HeaderProps> = ({
  title,
  register,
}) => {
  const isMobile = useIsMobile()

  const goHome = () => {
    window.location.href = `${window.location.protocol}//${window.location.host}/`
  }

  const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    formatCurrency(e)
  }, [])

  return (
    <Container>
      <InputWrapper {...register("totalAmount", { min: 0, max: 9999999999, })} required onKeyUp={handleKeyUp}/>
      <Label>{title}</Label>
    </Container>
  )
}

export default React.memo(Input)
