import React, { createContext } from 'react';
import './App.css';


const BatteryContext = createContext();

const Leaf = () => {
  return (
    <BatteryContext.Consumer>
      {
        battery => <h1>Batter:{battery}</h1>
      }
    </BatteryContext.Consumer>
  )
}

const Middle = () => {
  return (
    <Leaf />
  )
}

function App() {
  return (
    <BatteryContext.Provider value={60}>
      <Middle></Middle>
    </BatteryContext.Provider>
  );
}

export default App;
