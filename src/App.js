// import Balance from './components/Balance/Balance';
// import ExchangeRate from './components/ExchangeRate/ExchangeRate';
// import Navigation from './components/Navigation/Navigation';
// import SideBar from './components/SideBar';
import Statistic from './components/Statistic';
// import GlobalStyle from './styles/normalize';
// import Fonts from './styles/fonts'
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import LoginView from './views/LoginView';
import RegistrationView from './views/RegistrationView';
import { StatisticView } from './views/Statistics/StatisticView';
import { Layout } from './views/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" exact element={<Statistic />} />
          <Route path="login" exact element={<LoginView />} />
          <Route path="register" exact element={<RegistrationView />} />
          <Route path="statistics" exact element={<StatisticView />} />
          <Route path="*" element={<>404</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
