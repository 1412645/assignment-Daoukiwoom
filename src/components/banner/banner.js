import React from "react";
import styled from 'styled-components';
import banner from '../../assets/img/banner.png';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const Banner = () => {
  const [value, setValue] = React.useState('now');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <BannerContainer>
     <Box sx={{ width: '550px', paddingTop: '80px', margin: '0 auto' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Now" value="now" />
            <Tab label="Future" value="future" />
          </TabList>
        </Box>
        <TabPanel value="now">
          <ContentWrapper>
            <Item>
              <Amount>6</Amount >
              <Description>different IT Software Networks</Description>
            </Item>
            <Item>
              <Amount>32</Amount >
              <Description>partners</Description>
            </Item>
            <Item>
              <Amount>4</Amount >
              <Description>countries</Description>
            </Item>
          </ContentWrapper>
        </TabPanel>
        <TabPanel value="future">
        <ContentWrapper>
            <Item>
              <Amount>10</Amount >
              <Description>different IT Software Networks</Description>
            </Item>
            <Item>
              <Amount>50</Amount >
              <Description>partners</Description>
            </Item>
            <Item>
              <Amount>7</Amount >
              <Description>countries</Description>
            </Item>
          </ContentWrapper>
        </TabPanel>
      </TabContext>
    </Box>
    </BannerContainer>
  )
}

const BannerContainer = styled.div`
  height: 550px;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;

  .MuiBox-root {
    border: none;
  }

  .MuiTabs-flexContainer {
    justify-content: center;

    .MuiButtonBase-root {
      font-family: 'Noto Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 30px;
      color: #FFFFFF;
      text-transform: initial;
      opacity: 0.5;

      &.Mui-selected {
        color: #FFFFFF;
        opacity: 1;
      }
    }
  }

  .MuiTabs-indicator {
    background-color: white;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Item = styled.div`
  flex: 0 0 25%;
`

const Amount = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  text-align: center;
  color: #CFE5FF;
`

const Description = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: #FFFFFF;
`


export default Banner;