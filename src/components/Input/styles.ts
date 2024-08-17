import styled from 'styled-components'
import fontSize from '../../common/utils/fontSize';

export const Container = styled.div`
  position: relative;
  height: 56px;
  margin-bottom: 24px;
`

export const InputWrapper = styled.input`
  ${fontSize(16)}
  padding: 5px;
  display: block;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  border: 2px solid #757575;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`;

export const Label = styled.label`
  ${fontSize(16)}
  color: #424242;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 8px;
  top: 35%;
  transition: 0.2s ease all;
  color: #888888;
  
  ${InputWrapper}:focus ~ &,
  ${InputWrapper}:valid ~ & {
    top:-8px;
    font-size:14px;
    background-color: white;
    padding-right: 4px;
    padding-left: 4px;
    ${fontSize(12)}
  }

`;
