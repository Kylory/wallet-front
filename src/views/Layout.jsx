import { Outlet } from 'react-router-dom';
import {
  ContentWrapper,
  MainWrapperStyles,
  PageWrapper,
  AlignWrapper,
} from './MainWrapperStyles';
import Fonts from 'styles/fonts';
import GlobalStyle from 'styles/normalize';
import React from 'react';
import Balance from 'components/Balance';
// import Statistic from 'components/Statistic';
import SideBar from 'components/SideBar';
import Navigation from 'components/Navigation/Navigation';
import ExchangeRate from 'components/ExchangeRate';

export const Layout = () => {
  return (
    <>
      <Fonts />
      <GlobalStyle rwdVersion />
      <MainWrapperStyles>
        <PageWrapper>
          <header>Wallet</header>
          <ContentWrapper>
            <SideBar>
              <AlignWrapper>
                <Navigation />
                <Balance />
              </AlignWrapper>
              <ExchangeRate />
            </SideBar>
            {/* <Statistic/> */}
            <Outlet />
          </ContentWrapper>
        </PageWrapper>
      </MainWrapperStyles>
    </>
  );
};
