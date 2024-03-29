import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Crypto from './components/crypto/Crypto';
import Header from './components/header/Header';
import Wallet from './components/wallet/Wallet';
import Chart from './components/chart/Chart';

function App() {
  return (
    <div className="App">
      <Sidebar />
      {/* <Header />
      <Chart />
      <Crypto />
      <Wallet /> */}
    </div>
  );
}

export default App;
