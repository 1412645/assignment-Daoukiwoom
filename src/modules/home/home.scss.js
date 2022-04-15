import styled from 'styled-components';

export const HomeWrapper = styled.div`
`

export const HeaderSession = styled.div`
  display: flex;
`

export const LeftContent = styled.div`
  flex: 1 1 35%;
`

export const RightContent = styled.div`
  flex: 1 1 65%;
`

export const LeftContentWrapper = styled.div`
  padding: 36px 40px 0 80px;
`

export const RightContentWrapper = styled.div`
`

export const MarketPlace = styled.div`
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 76px;
  letter-spacing: 0.01em;
  color: #181949;
`

export const ServiceSession = styled.div`
  .service {
    &:nth-child(2n + 1) {
      background-color: #F4F4F4;
    }
  }
`

export const Title = styled.h1`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 65px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #181949;
`