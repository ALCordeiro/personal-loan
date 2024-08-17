import styled from 'styled-components'
import fontSize from '../../common/utils/fontSize';

export const Container = styled.div<{ isMobile: boolean }>`
  position: relative;
  margin-bottom: 24px;
  display: flex;
  ${({ isMobile }) => (isMobile ? 'display: flex; align-items: flex-end; height: 100%' : 'block' )};
`

export const TextFragment = styled.div`
  ${fontSize(12)}
  color: #888888;
  text-align: start;
`;

