import React from "react";
import styled from 'styled-components';

const TabInfor = () => {
  return (
    <TabInforContainer>
      <Content>You are now viewing an <strong>IT Software</strong> that has been verified by <strong>over 1 million users.</strong></Content>
    </TabInforContainer>
  )
}

const TabInforContainer = styled.div`
  padding: 30px 0;
  background-color: #FFD1E8;
`

const Content = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  color: #181949;
`

export default TabInfor;