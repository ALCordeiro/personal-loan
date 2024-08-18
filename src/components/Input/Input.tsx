import React from 'react';
import {
  Container,
  InputWrapper, 
  Label
} from './Input.styles';
import { UseFormRegisterReturn } from 'react-hook-form';

interface IInputProps {
  title: string;
  handleKeyUp: (e: React.FormEvent<HTMLInputElement>) => void;
  register: UseFormRegisterReturn;
}

const Input: React.FC<IInputProps> = ({
  title,
  handleKeyUp,
  register,
}) => {

  return (
    <Container>
      <InputWrapper
        data-cy="input-component"
        required
        onKeyUp={handleKeyUp}
        {...register}
      />
      <Label>{title}</Label>
    </Container>
  );
};

export default React.memo(Input);
