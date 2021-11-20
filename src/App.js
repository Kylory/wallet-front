import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getIsFetchingCurrentUser,
  getIsLoggedIn,
} from 'redux/auth/authSelectors';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import CircleLoader from 'react-spinners/CircleLoader';

import LoginView from 'views/Login-registration/LoginView';
import RegistrationView from 'views/Login-registration/RegistrationView';
import { StatisticView } from 'views/Statistics/StatisticView';
import { Layout } from 'views/Layout';
import Statistic from 'components/Statistic';
import ExchangeRate from 'components/ExchangeRate';

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const viewPort = window.screen.availWidth;

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
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
        <Routes>
          <Route
            path="/registration"
            element={!isLoggedIn ? <RegistrationView /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!isLoggedIn ? <LoginView /> : <Navigate to="/" />}
          />
          <Route
            path="/"
            element={isLoggedIn ? <Layout /> : <Navigate to="/login" />}
          >
            <Route path="/" element={<Statistic />} />
            <Route path="statistics" element={<StatisticView />} />
            <Route
              path="/exchange"
              element={viewPort <= 768 ? <ExchangeRate /> : <Navigate to="/" />}
            />
            <Route path="*" element={<>404</>} />
          </Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
