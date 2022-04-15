import React from "react";
import styled from 'styled-components';
import { PRICINGS } from '../../constants/const';

const Pricing = () => {
  return (
    <PricingContainer>
      <ListPricing>
        {PRICINGS.map((item, index) => {
          return (
            <PricingWrapper key={index}>
              <PricingLable>{item.name}</PricingLable>
              <Description>{item.description}</Description>
              <PriceContent>
                <Price className={item.price === 0 ? 'price--fontsize' : ''}>{item.price}</Price>
                <div>
                  <Unit>$</Unit>
                  <Text>Per Month</Text>
                </div>
              </PriceContent>
            </PricingWrapper>
          )
        })}
      </ListPricing>
    </PricingContainer>
  )
}

const PricingContainer = styled.div`
  padding: 110px 0;
  background-color: #F3F9FF;
`

const ListPricing = styled.div`
  display: flex;
  max-width: 1146px;
  margin: 0 auto;
  column-gap: 30px;
  justify-content: flex-start;
`

const PricingWrapper = styled.div`
  flex: 1 1 25%;
  background: #FFFFFF;
  border: 1px solid #DEDEDE;
  box-sizing: border-box;
  box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  padding: 40px 0 40px 40px;
  text-align: left;
`

const PricingLable = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  letter-spacing: 0.1px;
  color: #181949;
`

const Description = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.1px;
  color: #374754;
  margin-bottom: 20px;
`

const PriceContent = styled.div`
  display: flex;
  align-items: center;
`

const Price = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  letter-spacing: 0.2px;
  margin-right: 5px;

  &.price--fontsize {
    font-size: 64px;
  }
`

const Unit = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  letter-spacing: 0.1px;
  color: #252B42;
`

const Text = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.1px;
  color: #374754;
`


export default Pricing;