import React from "react";
import styled from 'styled-components';

const RightHeader = () => {
  return (
    <RightHeaderContainer>
      <NavList>
        <NavItem>Auto Homepage</NavItem>
        <NavItem>Sales</NavItem>
        <NavItem>CRM</NavItem>
        <NavItem>Electronic office</NavItem>
        <NavItem>Cloud ERP</NavItem>
        <NavItem>SSL</NavItem>
      </NavList>
    </RightHeaderContainer>
  )
}

const RightHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 60px;
  background-color: #001e5f;
  color: #ffffff;
`

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: flex-end;
  padding-right: 150px;
`

const NavItem = styled.li`
  padding: 10px 30px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #FFFFFF;
  cursor: pointer;
`

export default RightHeader;