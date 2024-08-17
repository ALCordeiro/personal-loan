import styled from 'styled-components'
import fontSize from '../../common/utils/fontSize';

export const Container = styled.div`
  position: relative;
  height: 56px;
  margin-bottom: 24px;
`;

export const UpsellBlock = styled.div`
  display: flex;
  justify-content: space-between;

  &:first-child {
    padding-bottom: 12px;
    border-bottom: 1px solid #E7E7E7;
    margin-bottom: 12px;
  }
`

export const Field = styled.span`
  ${fontSize(16)}
  color: #424242;
`

export const Result = styled.span`
  ${fontSize(16)}
  color: #121212;
  font-weight: 700;
`
