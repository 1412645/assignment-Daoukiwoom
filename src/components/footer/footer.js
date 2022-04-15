import React from "react";
import styled from 'styled-components';
import { OFFICES } from '../../constants/const';

const Footer = () => {
  const renderOfficeInfor = (descriptions) => {
    return descriptions.map((des, index) => {
      return <ItemInfor key={index}>{des}</ItemInfor>
    })
  }
  return (
    <FooterContainer>
      <ListOffice>
        {OFFICES.map((office, index) => {
          return (
            <WrapperOffice key={index}>
              <Title>{office.name}</Title>
              {renderOfficeInfor(office.descriptions)}
            </WrapperOffice>
          )
        })}
      </ListOffice>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  background-color: #F3F9FF;
  border-top: 1px solid rgba(153, 153, 153, 0.46);
`

const WrapperOffice = styled.div`
  padding: 40px;
  flex: 1 1 33%;
  text-align: left;
  border-right: 2px solid rgba(153, 153, 153, 0.46);

  &:last-child {
    border: none;
  }
`

const Title = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;
  letter-spacing: -0.3px;
  margin-bottom: 10px;
`

const ItemInfor = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #666666;
  margin-bottom: 5px;
`

const ListOffice = styled.div`
  display: flex;
  max-width: 1080px;
  margin: 0 auto;
`

export default Footer;