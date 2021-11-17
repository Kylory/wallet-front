import { Outlet } from 'react-router-dom';
import Media from 'react-media';

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
import { Header } from 'components/Header/Header';

export const Layout = () => {
  return (
    <>
      <Fonts />
      <GlobalStyle rwdVersion />
      <MainWrapperStyles>
        <PageWrapper>
          <Header />
          <ContentWrapper>
            <Media query={{ maxWidth: 767 }}>
              <>
                <SideBar>
                  <AlignWrapper>
                    <Navigation />
                    {/* <Balance /> */}
                  </AlignWrapper>
                </SideBar>
              </>
            </Media>
            <Media query={{ minWidth: 768 }}>
              <SideBar>
                <AlignWrapper>
                  <Navigation />
                  <Balance />
                </AlignWrapper>
                <ExchangeRate />
              </SideBar>
            </Media>
            <Outlet />
          </ContentWrapper>
        </PageWrapper>
      </MainWrapperStyles>
    </>
  );
};
