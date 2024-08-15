import styled from 'styled-components'
import fontSize from '../../common/utils/fontSize';
import { Field } from 'formik';

export const Container = styled.div`
  position: relative;
  height: 56px;

	@media (max-width: 768px) {
		margin-bottom: 16px;
	}
`

export const Text = styled.input`
  ${fontSize(16)}
  padding: 5px;
  display: block;
  height: 100%;
  box-sizing: border-box;
  width: 300px;
  border: 2px solid #757575;
  border-radius: 4px;
  &:focus {
    outline: none;
  }


`;

export const Label = styled.label`
  ${fontSize(16)}
  color: #424242;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 8px;
  top: 30%;
  transition: 0.2s ease all;
  
  ${Text}:focus ~ &,
  ${Text}:valid ~ & {
    top:-8px;
    font-size:14px;
    background-color: white;
    padding-right: 4px;
    padding-left: 4px;
    ${fontSize(12)}
  }

`;
