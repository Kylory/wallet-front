import Balance from './components/Balance/Balance';
import ExchangeRate from './components/ExchangeRate/ExchangeRate';
import Navigation from './components/Navigation/Navigation';
import SideBar from './components/SideBar';
import Statistic from './components/Statistic'
function App() {
  return (
    <>
      <div>Wallet</div>
      <SideBar>
        <Navigation />
        <Balance />
        <ExchangeRate />
      </SideBar>
      <Statistic />
    </>
  
  );
}

export default App;
