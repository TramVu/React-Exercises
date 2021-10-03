import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Sidebar from './components/Sidebar.js';
import Mainbar from './components/Mainbar.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <Mainbar/>
    </div>
  );
}

export default App;
