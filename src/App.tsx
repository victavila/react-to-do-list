import React from 'react';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
