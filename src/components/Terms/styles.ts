import styled from 'styled-components'
import fontSize from '../../common/utils/fontSize';

export const Container = styled.div`
  position: relative;
  height: 64px;
  margin-bottom: 24px;

	@media (max-width: 768px) {
		margin-bottom: 16px;
	}
`

export const TextFragment = styled.div`
  ${fontSize(12)}
  color: #888888;
  text-align: start;
`;

