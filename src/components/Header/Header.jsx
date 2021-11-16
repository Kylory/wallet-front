import React from 'react';
import {LogoText } from '../FormLogin/styles';
import { ReactComponent as LogoIcon } from '../../icons/logo.svg';
import { ReactComponent as ExitIcon } from '../../icons/exit.svg';
import { ExitWrapper, HeaderWrapper, LogoHeader } from './style';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const { pathname } = useLocation();
  const show = pathname === '/' || pathname === '/statistics';
  return (
    <HeaderWrapper show={show}>
      <LogoHeader>
        <LogoIcon/>
        <LogoText>Wallet</LogoText>
      </LogoHeader>
      <ExitWrapper>
        <p>Имя</p>
        <ExitIcon/>
      </ExitWrapper>
    </HeaderWrapper>);
};
