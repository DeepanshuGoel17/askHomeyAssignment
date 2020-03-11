import React from 'react';
import Applayout from '../components/Applayout/Applayout';
import './App.css';
import Dashboard from  './Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
    <Applayout>
      <Dashboard></Dashboard>
    </Applayout>
    </div>
  );
}

export default App;
