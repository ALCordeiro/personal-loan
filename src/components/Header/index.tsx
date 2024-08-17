import React from 'react';
import { HeaderContainer, Icon, LogoContainer } from './styles';
import loremLogo from '../../common/icons/lorem-logo.png';

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Icon src={loremLogo} alt="Logo" />
      </LogoContainer>
    </HeaderContainer>
  );
};

export default React.memo(Header);