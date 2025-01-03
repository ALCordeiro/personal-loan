import styled from 'styled-components'
import fontSize from '../../common/utils/fontSize';

export const Container = styled.div`
  border: 2px solid #E7E7E7;
  border-radius: 16px;
  padding: 24px;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.span`
  ${fontSize(16)}
  color: #424242;
  font-weight: 500;
`

export const Money = styled.span`
  ${fontSize(16)}
  color: #424242;
  font-weight: 500;
  margin-bottom: 24px;
`

export const ImageBlockContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 0.1fr;
  border-bottom: 1px solid #E7E7E7;
  padding-bottom: 20px;
  margin-bottom: 20px;
`

export const ImageCard = styled.img`
  width: 70px;
  height: 50px
`

export const ImageInformationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px
`

export const ImageTitle = styled.span`
  ${fontSize(16)}
  font-weight: 700;
`

export const ImageSubtitle = styled.span`
  ${fontSize(12)}
  padding-top: 12px;
`

export const LoanInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const FirstBlock = styled.span`
  ${fontSize(13)}
  font-weight: 400;
`
export const FirstBlockContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  flex-direction: column;
  row-gap: 10px;
`
export const SecondBlock = styled.span`
  ${fontSize(13)}
  font-weight: 700;
`

export const SecondBlockContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  flex-direction: column
`

export const IconImage = styled.img`
  width: 24px;
  height: 24px;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;

  & button {
    width: 100%;
  }
`