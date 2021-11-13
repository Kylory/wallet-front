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
        <Route path='/' element={<Layout/>}>
          <Route path='/' index element={<div>Igor we are waiting for you</div>}/>
          <Route path="login" exact element={<LoginView/>}/>
          <Route path="register" exact element={<RegistrationView/>}/>
          <Route path='statistics' exact element={<StatisticView/>}/>
          <Route path="*" element={<>404</>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
