import styled from 'styled-components'
import fontSize from '../common/utils/fontSize';

export const HomePageTitle = styled.h1`
  ${fontSize(32)}
  font-weight: 700;
  padding: 16px 0px 32px 0px;
  color: #000000;
`

export const HomePageWrapper = styled.div<{ isMobile: boolean }>`
  box-sizing: border-box;
  margin-left: 15%;
  margin-right: 15%;
  padding-top: ${({ isMobile }) => (isMobile ? '70px' : '200px')};

  @media (max-width: 768px) {
		display: flex;
    flex-direction: column;
    justify-content: space-between;
	}
`;

export const FormWrapper = styled.form`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
		display: grid;
    grid-template-rows: 5fr 0.5fr;
	}
`

export const ButtonWrapper = styled.div<{ isMobile: boolean }>`
  margin-bottom: 20px;
  padding-top: 20px;
  border-top: ${({ isMobile }) => (isMobile ? '0px' : '1px solid #E7E7E7')};
  margin-right: ${({ isMobile }) => (isMobile ? '15%' : '0')};
  margin-left: ${({ isMobile }) => (isMobile ? '15%' : '0')};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FieldsContainer = styled.div<{ isMobile: boolean }>`
  width: ${({ isMobile }) => (isMobile ? 'auto' : '458px')};
`
export const TermsContainer = styled.div<{ isMobile: boolean }>`
  margin-bottom: 24px;
  min-height: ${({ isMobile }) => (isMobile ? '500px' : '0px')};;
`