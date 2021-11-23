import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

import { logOut } from '../../redux/auth/authOperations';
import { getUserName } from 'redux/auth/authSelectors';

import { ReactComponent as LogoIcon } from '../../icons/logo.svg';
import { ReactComponent as ExitIcon } from '../../icons/exit.svg';
import { ExitWrapper, HeaderWrapper, LogoHeader, ExitText } from './style';
import { fontColorsStatistic } from '../../styles/colors';
import { LogoText } from '../FormLogin/styles';

export const Header = () => {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  const logOutHandler = function () {
    Swal.fire({
      title: 'Вы действительно хотите выйти ?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: fontColorsStatistic.income,
      cancelButtonColor: fontColorsStatistic.expenses,
      confirmButtonText: 'Да',
      cancelButtonText: 'Нет',
    }).then(result => {
      if (result.isConfirmed) {
        dispatch(logOut());
      }
    });
  };

  const { pathname } = useLocation();
  const show =
    pathname === '/' || pathname === '/statistics' || pathname === '/exchange';
  return (
    <HeaderWrapper show={show}>
      <LogoHeader>
        <LogoIcon />
        <LogoText>Wallet</LogoText>
      </LogoHeader>
      <ExitWrapper onClick={logOutHandler}>
        <p>{name}</p>
        <ExitIcon />
        <ExitText>Выйти</ExitText>
      </ExitWrapper>
    </HeaderWrapper>
  );
};
