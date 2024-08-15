import React from 'react';
import {
  Container,
  InputWrapper, 
  Label
} from './styles';
import useIsMobile from '../../common/hooks/useIsMobile';
import { UseFormRegisterReturn } from 'react-hook-form';

interface HeaderProps {
  title: string;
  handleKeyUp: (e: React.FormEvent<HTMLInputElement>) => void;
  register: UseFormRegisterReturn;
}

const Input: React.FC<HeaderProps> = ({
  title,
  handleKeyUp,
  register,
}) => {
  const isMobile = useIsMobile();

  return (
    <Container>
      <InputWrapper
        required
        onKeyUp={handleKeyUp}
        {...register}
      />
      <Label>{title}</Label>
    </Container>
  );
};

export default React.memo(Input);
