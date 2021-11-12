import Balance from './components/Balance/Balance';
import ExchangeRate from './components/ExchangeRate/ExchangeRate';
import Navigation from './components/Navigation/Navigation';
import SideBar from './components/SideBar';
// import LoginView from './views/LoginView';
// import RegistrationView from './views/RegistrationView';

function App() {
  return (
    <>
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
