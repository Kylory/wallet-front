import { Outlet } from 'react-router-dom';
import Media from 'react-media';
import { useSelector } from 'react-redux';
import CircleLoader from 'react-spinners/CircleLoader';

import {
  ContentWrapper,
  MainWrapperStyles,
  PageWrapper,
  AlignWrapper,
  LineWrapper,
} from './MainWrapperStyles';
import Fonts from 'styles/fonts';
import GlobalStyle from 'styles/normalize';
import React from 'react';
import Balance from 'components/Balance';
import SideBar from 'components/SideBar';
import Navigation from 'components/Navigation/Navigation';
import ExchangeRate from 'components/ExchangeRate';
import { Header } from 'components/Header/Header';
import { getIsFetchingCurrentUser } from 'redux/auth/authSelectors';

import ButtonAddTransaction from 'components/Transactions/ButtonAddTransaction';
import { getIsModalAddTransactionOpen } from 'redux/transactions/transactions-selectors';
import TransactionAddForm from 'components/Transactions/TransactionAddForm';

export const Layout = () => {
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);
  const isModalAddTransactionOpen = useSelector(getIsModalAddTransactionOpen);

  return (
    <>
      <Fonts />
      <GlobalStyle rwdVersion />
      {isFetchingCurrentUser ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.55)',
            zIndex: '1000',
          }}
        >
          <CircleLoader color={'#24CCA7'} size={150} />
        </div>
      ) : (
        <MainWrapperStyles>
          <Header />
          <PageWrapper>
            <LineWrapper />
            <ContentWrapper>
              <Media query={{ maxWidth: 767 }}>
                <>
                  <SideBar>
                    <AlignWrapper>
                      <Navigation />
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
              <ButtonAddTransaction />
              {isModalAddTransactionOpen && <TransactionAddForm />}
            </ContentWrapper>
          </PageWrapper>
        </MainWrapperStyles>
      )}
    </>
  );
};
