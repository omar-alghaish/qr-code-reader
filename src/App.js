import React from 'react';
import './App.css';
import QRCodeReader from './components/QRCodeReader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>QR Code Reader</h1>
      </header>
      <QRCodeReader />
    </div>
  );
}

export default App;

