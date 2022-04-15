import React from "react";
import styled from 'styled-components';

const BlockService = ({service}) => {
  const {name, items, imageUrl, isAlignLeftImage} = service;
  return (
    <BlockServiceContainer className="service">
     <ServiceWrapper>
        <WrapperImage className={isAlignLeftImage ? 'align-image' : ''}>
          <Image src={imageUrl} alt="assest" />
        </WrapperImage>
        <Content>
          <Title>{name}</Title>
          <ListService>
            {items.map((item, index) => {
              return (
                <Service key={index}>
                  <Label>{item.name}</Label>
                  <ServicePlace>{item.place}</ServicePlace>
                </Service>
              )
            })}
          </ListService>
        </Content>
     </ServiceWrapper>
    </BlockServiceContainer>
  )
}

const BlockServiceContainer = styled.div`
  padding: 70px 0;
`

const ServiceWrapper = styled.div`
  display: flex;
  max-width: 900px;
  margin: 0 auto;
  align-items: center;
`

const WrapperImage = styled.div`
  flex: 0 0 50%;
  text-align: right;
  order: 1;

  &.align-image {
    order: 0;
    text-align: left;
  }
`

const Image = styled.img`
`

const Content = styled.div`
  flex: 0 0 50%;
  text-align: right;
  order: 0;

  &.align-left-content {
    text-align: right;
  }
`

const Title = styled.h2`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  text-align: center;
  text-transform: uppercase;
  color: #181949;
  margin-top: 0;
  margin-bottom: 15px;
`

const ListService =  styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 20px;
`

const Service = styled.div`
  text-align: center;
`

const Label = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #666666;
  margin-bottom: 10px;
`

const ServicePlace = styled.div`
  display: inline;
  padding: 5px 15px;
  background: #181949;
  border-radius: 8px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
`

export default BlockService;