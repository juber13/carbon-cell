import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Crypto from './components/crypto/Crypto';
import Header from './components/header/Header';
import Chart from './components/chart/Chart';
import Trends from './components/trends/Trends';
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
        <div className='crypto-container'>
          <h3 style={{ color: "#fff" }}>Asset</h3>
          <Crypto />
        </div>

        <div className='trend-container'>
          <h3>Trends</h3>
          <Trends />
        </div>

      </div>
    </div>
  );
}

export default App;
