import React from 'react';
import { LogoText } from '../FormLogin/styles';
import { ReactComponent as LogoIcon } from '../../icons/logo.svg';
import { ReactComponent as ExitIcon } from '../../icons/exit.svg';
import { ExitWrapper, HeaderWrapper, LogoHeader } from './style';
import { useLocation } from 'react-router-dom';
import { fontColorsStatistic } from '../../styles/colors'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux';
import {logOut} from '../../redux/auth/authOperations'
export const Header = () => {
  const dispatch = useDispatch()


  const logOutHandler = function() {
    Swal.fire({
      title: 'Вы действительно хотите выйти ?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: fontColorsStatistic.income,
      cancelButtonColor: fontColorsStatistic.expenses,
      confirmButtonText: 'Да',
      cancelButtonText: 'Нет'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logOut())
      }
    })
  }


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
        <p>Имя</p>
        <ExitIcon />
      </ExitWrapper>
    </HeaderWrapper>
  );
};
