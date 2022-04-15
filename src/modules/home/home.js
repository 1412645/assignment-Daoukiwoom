import React from 'react';
import {
  HomeWrapper,
  HeaderSession,
  LeftContentWrapper,
  RightContentWrapper,
  LeftContent,
  RightContent,
  MarketPlace,
  ServiceSession,
  Title
} from './home.scss';
import LeftHeader from '../../components/leftHeader/leftHeader';
import TopBar from '../../components/topBar/topBar';
import RightHeader from '../../components/rightHeader/rightHeader';
import Banner from '../../components/banner/banner';
import TabInfor from '../../components/tabInfor/tabInfor';
import BlockService from '../../components/blockService/blockService';
import Pricing from '../../components/pricing/pricing';
import Footer from '../../components/footer/footer';
import { SERVICES } from '../../constants/const';

const Home = () => {
  return (
    <HomeWrapper>
      <HeaderSession>
        <LeftContent>
          <LeftContentWrapper>
            <LeftHeader />
            <MarketPlace>Asia IT Market Place</MarketPlace>
          </LeftContentWrapper>
        </LeftContent>
        <RightContent>
          <RightContentWrapper>
            <TopBar />
            <RightHeader />
          </RightContentWrapper>
          <Banner />
        </RightContent>
      </HeaderSession>
      <TabInfor />
      <ServiceSession>
        <Title>IT CLOUD SEA’S IT SERVICE</Title>
        {SERVICES.map((service, index) => <BlockService service={service} key={index} />)}
      </ServiceSession>
      <Pricing />
      <Footer />
    </HomeWrapper>
  )
}

export default Home;