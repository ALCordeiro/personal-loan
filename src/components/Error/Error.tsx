import React from 'react';
import {
  ErrorComponent,
} from './Error.styles';

interface IErrorProps {
  errorMessage: string;
}

const Error: React.FC<IErrorProps> = ({
  errorMessage,
}) => {

  return (
    <ErrorComponent>{errorMessage}</ErrorComponent>
  );
};

export default React.memo(Error);
