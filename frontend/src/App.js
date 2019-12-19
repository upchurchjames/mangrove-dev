import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  fetch('http://localhost:3001/hello', 
    {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch((error) => console.log(error))

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
