import React from "react";
import styled from 'styled-components';
import logo from '../../assets/icon/logo.png';
import home from '../../assets/icon/home.png';

const LeftHeader = () => {
  return (
    <LeftHeaderContainer>
      <ImageLogo src={logo} alt="logo" />
      <Home>
        <ImageHome src={home} alt="home" />
        Home
      </Home>
    </LeftHeaderContainer>
  )
}

const LeftHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`

const ImageLogo = styled.img``

const Home = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #181949;
`

const ImageHome = styled.img`
  margin-right: 10px;
`

export default LeftHeader;