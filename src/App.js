import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsFetchingCurrentUser } from 'redux/auth/authSelectors';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import LoginView from 'views/Login-registration/LoginView';
import RegistrationView from 'views/Login-registration/RegistrationView';
import { StatisticView } from 'views/Statistics/StatisticView';
import { Layout } from 'views/Layout';
import Statistic from 'components/Statistic';

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      {isFetchingCurrentUser ? (
        <h1>Здесь будет лоадер</h1>
      ) : (
        <Routes>
          <Route path="/registration" exact element={<RegistrationView />} />
          <Route path="/login" exact element={<LoginView />} />
          <Route path="/" element={<Layout />}>
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
