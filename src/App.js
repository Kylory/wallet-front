import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getIsFetchingCurrentUser,
  getIsLoggedIn,
} from 'redux/auth/authSelectors';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import LoginView from 'views/Login-registration/LoginView';
import RegistrationView from 'views/Login-registration/RegistrationView';
import { StatisticView } from 'views/Statistics/StatisticView';
import { Layout } from 'views/Layout';
import Statistic from 'components/Statistic';

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      {isFetchingCurrentUser ? (
        <h1>Здесь будет лоадер</h1>
      ) : (
        <Routes>
          <Route
            path="/registration"
            exact
            element={!isLoggedIn ? <RegistrationView /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            exact
            element={!isLoggedIn ? <LoginView /> : <Navigate to="/" />}
          />
          <Route
            path="/"
            element={isLoggedIn ? <Layout /> : <Navigate to="/login" />}
          >
            <Route path="/" exact element={<Statistic />} />
            <Route path="statistics" exact element={<StatisticView />} />
            <Route path="*" element={<>404</>} />
          </Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
