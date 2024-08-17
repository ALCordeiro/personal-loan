import React from 'react';
import {
  ButtonComponent,
} from './styles';
import useIsMobile from '../../common/hooks/useIsMobile';

interface IButtonProps {
  type: "button" | "reset" | "submit" | undefined;
  disabled: boolean;
  label: string;
}

const Button: React.FC<IButtonProps> = ({
  type,
  disabled,
  label,
  ...props
}) => {
  const isMobile = useIsMobile();

  return (
    <ButtonComponent type={type} disabled={disabled} {...props} isDisabled={disabled} isMobile={isMobile}>
      {label}
    </ButtonComponent>
  );
};

export default React.memo(Button);
