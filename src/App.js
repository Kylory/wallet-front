import Balance from './components/Balance/Balance';
import ExchangeRate from './components/ExchangeRate/ExchangeRate';
import Navigation from './components/Navigation/Navigation';
import SideBar from './components/SideBar';

import GlobalStyle from './styles/normalize';
import Fonts from './styles/fonts'
import React from 'react';

// import LoginView from './views/LoginView';
// import RegistrationView from './views/RegistrationView';

function App() {
  return (
    <>

      <Fonts/>
      <GlobalStyle rwdVersion/>
      <div>Wallet</div>

      {/* <LoginView /> */}
      {/* <RegistrationView /> */}

      <SideBar>
        <Navigation />
        <Balance />
        <ExchangeRate />
      </SideBar>
    </>
  );
}

export default App;
