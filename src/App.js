import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsFetchingCurrentUser } from 'redux/auth/authSelectors';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Media from 'react-media';

import LoginView from 'views/Login-registration/LoginView';
import RegistrationView from 'views/Login-registration/RegistrationView';
import { StatisticView } from 'views/Statistics/StatisticView';
import { Layout } from 'views/Layout';
import Statistic from 'components/Statistic';
import ExchangeRate from 'components/ExchangeRate';
import Balance from 'components/Balance';

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
        <>
          <Media query={{ maxWidth: 767 }}>
            <Routes>
              <Route
                path="/registration"
                exact
                element={<RegistrationView />}
              />
              <Route path="/login" exact element={<LoginView />} />
              <Route path="/" element={<Layout />}>
                <Route path="/" exact element={<Balance />} />
                <Route path="/" exact element={<Statistic />} />
                <Route path="statistics" exact element={<StatisticView />} />
                <Route path="exchange" exact element={<ExchangeRate />} />
                <Route path="*" element={<>404</>} />
              </Route>
            </Routes>
          </Media>
          <Media query={{ minWidth: 768 }}>
            <Routes>
              <Route
                path="/registration"
                exact
                element={<RegistrationView />}
              />
              <Route path="/login" exact element={<LoginView />} />
              <Route path="/" element={<Layout />}>
                <Route path="/" exact element={<Statistic />} />
                <Route path="statistics" exact element={<StatisticView />} />
                <Route path="*" element={<>404</>} />
              </Route>
            </Routes>
          </Media>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
