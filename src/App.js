import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Crypto from './components/crypto/Crypto';
import Header from './components/header/Header';
import Wallet from './components/wallet/Wallet';
import Chart from './components/chart/Chart';
import { useState } from 'react';

function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  const [charts] = useState(["Pie", "Line", "Bar"]);
  const [chartValue, setChartValue] = useState('Pie');
  return (
    <div className="App">
      <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <div className="right">
        <Header setShowSideBar={setShowSideBar} showSideBar={showSideBar} charts={charts} setChartValue={setChartValue} />
        <Chart chartValue={chartValue} />
        <Crypto />
        {/* 
      <Wallet /> */}
      </div>
    </div>
  );
}

export default App;
