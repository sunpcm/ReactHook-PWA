import React, { createContext, useState, useContext } from 'react';
import './App.css';


const BatteryContext = createContext();
const OnlineContext = createContext();

const Leaf = () => {
  const battery = useContext(BatteryContext);
  return (
    <h1>Batter:{battery}</h1>
  )
}

const Middle = () => {
  return (
    <Leaf />
  )
}

function App() {
  const [battery, setBattery] = useState(60)
  const [online, setOnline] = useState(false)
  return (
    <BatteryContext.Provider value={battery}>
      <OnlineContext.Provider value={online}>
        <button
          onClick={() => setBattery(battery + 1)}
        >
          Plus
        </button>
        <button
          onClick={() => setOnline(!online)}
        >
          Switch
      </button>
        <Middle></Middle>
      </OnlineContext.Provider>
    </BatteryContext.Provider>
  );
}

export default App;
