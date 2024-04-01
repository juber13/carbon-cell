import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Crypto from './components/crypto/Crypto';
import Header from './components/header/Header';
import Wallet from './components/wallet/Wallet';
import Chart from './components/chart/Chart';
import { useState } from 'react';

function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="App">
      <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <div className="right">
          <div className="right-container">
            <Header setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
            <Chart />
            <Crypto />
          </div>
          {/* 
      <Wallet /> */}
        </div>
    </div>
  );
}

export default App;
