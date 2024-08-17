import React from 'react';
import {
  ErrorComponent,
} from './styles';
import useIsMobile from '../../common/hooks/useIsMobile';

interface IErrorProps {
  errorMessage: string;
}

const Error: React.FC<IErrorProps> = ({
  errorMessage,
}) => {
  const isMobile = useIsMobile();

  return (
    <ErrorComponent>{errorMessage}</ErrorComponent>
  );
};

export default React.memo(Error);
