import { Outlet } from 'react-router-dom';
import { ContentWrapper, MainWrapperStyles, PageWrapper } from './MainWrapperStyles';
import Fonts from '../styles/fonts';
import GlobalStyle from '../styles/normalize';
import React, { useState } from 'react';
import Balance from '../components/Balance';
// import Statistic from '../components/Statistic';
import SideBar from '../components/SideBar';
import Navigation from '../components/Navigation/Navigation';
import ExchangeRate from '../components/ExchangeRate';
import { Header } from '../components/Header/Header';


export const Layout = () => {

  const [auth, setAuth] = useState(true);
  return (
    <>
      <Fonts/>
      <GlobalStyle rwdVersion/>
      <MainWrapperStyles>
        <PageWrapper>
          <Header/>
          <ContentWrapper>
            {auth && <div>
              <Navigation/>
              <SideBar/>
              <Balance/>
              <ExchangeRate/>
            </div>}
            {/* <Statistic/> */}
            <Outlet/>
          </ContentWrapper>
        </PageWrapper>
      </MainWrapperStyles>
    </>
  );
};
