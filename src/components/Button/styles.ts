import styled from 'styled-components'
import fontSize from '../../common/utils/fontSize';

export const ButtonComponent = styled.button<{ isDisabled: boolean; isMobile: boolean }>`
  ${fontSize(14)}
  opacity: ${({ isDisabled }) => (isDisabled ? '0.6' : '1')};
  padding: 8px 16px 8px 16px;
  height: 57px;
  width: ${({ isMobile }) => (isMobile ? '100%' : '404px')};
  margin-right: ${({ isMobile }) => (isMobile ? '15%' : '0')};
  margin-left: ${({ isMobile }) => (isMobile ? '15%' : '0')};
  background-color: #7146B5;
  border-radius: 4px;
  border: 0px solid white;
  color: #FFFFFF;
  text-transform: uppercase;
  cursor: pointer;
  transition: opacity 0.3s;
`