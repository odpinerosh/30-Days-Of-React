import React from 'react';
import NumberGen from './components/NumberGen';
import HexColor from './components/HexColor';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>30 days of react</h1>
      </header>
      <NumberGen />
      <HexColor />
    </div>
  );
}

export default App;